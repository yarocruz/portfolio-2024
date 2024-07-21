import dotenv from 'dotenv';
dotenv.config()
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from "@langchain/core/output_parsers";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { StreamingTextResponse, LangChainAdapter } from 'ai';
import fetch from 'node-fetch';
import pdf from 'pdf-parse';

export async function POST(req: Request, res: Response) {

    // const loader = new PDFLoader('resume.pdf', {
    //     parsedItemSeparator: " ",
    // });
    // const docs = await loader.load();
    // console.log(docs[0].pageContent);

    // const model = new ChatOpenAI({ model: 'gpt-4', streaming: true});

    // const parser = new StringOutputParser();

    // const aboutJay = `
    // Jay is a Software Engineer located in Orlando, Fl.
    // He is currently an Intructional team member for Edx / 2U Coding Bootcamp.
    // Jay has a passion for learning and teaching.
    // He worked for a company called ThreatLocker doing Frontend Development.
    // Was a Technical Support Engineer for ServiceNow
    // `

    // const resume = docs[0].pageContent;

    // const systemTemplate = `You are an AI assistant for Jay cruz
    // You will answer questions about Jay based on his resume.

    // If there's a question that it's not provided in the resume,
    // or are unable to infer from the resume, 
    // answer with "I don't have that information
    // at the moment, but next time I see Jay I will ask him."

    // resume: ${resume}
    // `;

    // const promptTemplate = ChatPromptTemplate.fromMessages([
    //     ["system", systemTemplate],
    //     ["user", "{text}"]
    // ])

    // const chain = promptTemplate.pipe(model).pipe(parser);

    // const question = await request.json();
    // console.log("Question", question.messages[0].content);
    // console.log("Messages", question)

    // const stream = await chain.stream({ text: question.messages[question.messages.length - 1].content });
    // const aiStream = LangChainAdapter.toAIStream(stream);
    // return new StreamingTextResponse(aiStream);

    if (req.method !== 'POST') {
        //return res.status(405).json({ message: 'Method Not Allowed' });
        return res.status;
    }

    try {
        console.log("Starting PDF fetch...");

        // Static file URL
        const pdfUrl = "https://portfolio-2024-swart-nu.vercel.app/resume.pdf";
        const response = await fetch(pdfUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch PDF: ${response.statusText}`);
        }

        console.log("PDF fetched successfully");
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        console.log("Buffer received", buffer.length);

        const data = await pdf(buffer);
        console.log("PDF parsed successfully");

        const model = new ChatOpenAI({ model: 'gpt-4', streaming: true });

        const parser = new StringOutputParser();

        const aboutJay = `
        Jay is a Software Engineer located in Orlando, Fl.
        He is currently an Instructional team member for Edx / 2U Coding Bootcamp.
        Jay has a passion for learning and teaching.
        He worked for a company called ThreatLocker doing Frontend Development.
        Was a Technical Support Engineer for ServiceNow
        `;

        const resume = data.text;

        const systemTemplate = `You are an AI assistant for Jay Cruz
        You will answer questions about Jay based on his resume.

        If there's a question that it's not provided in the resume,
        or are unable to infer from the resume, 
        answer with "I don't have that information
        at the moment, but next time I see Jay I will ask him."

        resume: ${resume}
        `;

        const promptTemplate = ChatPromptTemplate.fromMessages([
            ["system", systemTemplate],
            ["user", "{text}"]
        ]);

        const chain = promptTemplate.pipe(model).pipe(parser);

        const question = await req.json();
        console.log("Question", question.messages[0].content);
        console.log("Messages", question);

        const stream = await chain.stream({ text: question.messages[question.messages.length - 1].content });
        const aiStream = LangChainAdapter.toAIStream(stream);

        console.log("Returning AI stream response");
        return new StreamingTextResponse(aiStream);
    } catch (error) {
        console.error("Error in API handler:", error);
        return res.status;
    }

}