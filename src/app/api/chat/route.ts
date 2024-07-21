import dotenv from 'dotenv';
dotenv.config()
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from "@langchain/core/output_parsers";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { StreamingTextResponse, LangChainAdapter } from 'ai';

export async function POST(request: Request) {

    const loader = new PDFLoader('resume.pdf', {
        parsedItemSeparator: " ",
    });
    const docs = await loader.load();
    console.log(docs[0].pageContent);

    const model = new ChatOpenAI({ model: 'gpt-4', streaming: true});

    const parser = new StringOutputParser();

    const aboutJay = `
    Jay is a Software Engineer located in Orlando, Fl.
    He is currently an Intructional team member for Edx / 2U Coding Bootcamp.
    Jay has a passion for learning and teaching.
    He worked for a company called ThreatLocker doing Frontend Development.
    Was a Technical Support Engineer for ServiceNow
    `

    const resume = docs[0].pageContent;

    const systemTemplate = `You are an AI assistant for Jay cruz
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
    ])

    const chain = promptTemplate.pipe(model).pipe(parser);

    const question = await request.json();
    console.log("Question", question.messages[0].content);
    console.log("Messages", question)

    const stream = await chain.stream({ text: question.messages[question.messages.length - 1].content });
    const aiStream = LangChainAdapter.toAIStream(stream);
    return new StreamingTextResponse(aiStream);

}