import dotenv from 'dotenv';
dotenv.config()
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from "@langchain/core/output_parsers";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { StreamingTextResponse, LangChainAdapter } from 'ai';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import fetch from 'node-fetch';

export async function POST(request: Request) {
    //https://drive.google.com/file/d/1PxHBs4NUtKmnAjfxicKh4AFtx0oVv20R/view?usp=sharing

    const pdfUrl = "https://drive.google.com/uc?export=download&id=1PxHBs4NUtKmnAjfxicKh4AFtx0oVv20R";
    const localPdfPath = path.join('/tmp', 'resume.pdf');

    // const response = await axios({
    //     url: pdfUrl,
    //     method: 'GET',
    //     responseType: 'stream'
    // });

    // const writer = fs.createWriteStream(localPdfPath);
    // response.data.pipe(writer);

    // await new Promise((resolve, reject) => {
    //     writer.on('finish', resolve);
    //     writer.on('error', reject);
    // });

    const response = await fetch(pdfUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch PDF: ${response.statusText}`);
    }
    
    const buffer = await response.buffer();
    fs.writeFileSync(localPdfPath, buffer);

    const loader = new PDFLoader(localPdfPath, {
        parsedItemSeparator: " ",
    });
    const docs = await loader.load();
    //console.log(docs[0].pageContent);

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