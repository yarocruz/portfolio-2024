import dotenv from 'dotenv';
dotenv.config()
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from "@langchain/core/output_parsers";
import { StreamingTextResponse, LangChainAdapter } from 'ai';
import nodemailer from 'nodemailer';

async function sendEmail(subject: string, text: string) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    let info = await transporter.sendMail({
        from: `"Chatbot Notification" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: subject,
        text: text,
    });

    console.log('Message sent: %s', info.messageId);
}

export async function POST(request: Request) {

    const resumeContent = `
    Jay Cruz 
407-257-3298 | yarocruz@gmail.com | portfolio | in/yarosky-cruz | Orlando, FL 
SOFTWARE ENGINEER 
A creative Software Engineer with strong complex problem solving skills. Experienced in Full-Stack Web Development 
using React with Node + Express with either Non-SQL (MongoDB) or SQL (Postgres). Skilled in TypeScript, Python, and 
Rust. Collaborate on cross-functional teams with strong communication and interpersonal skills. 
SKILLS 
React | Node | Express | MongoDB | SQL (Postgres) | TypeScript | Python | Rust | Vue.js | Communication Problem 
Solving | Cross-functional Team Collaboration | Data Management | Teamwork | Mentorship Web Development 
JavaScript | User Interface Design | Responsive Web Design | Adobe Creative Suite | CSS 
EXPERIENCE 
Web Development Teaching Assistant | 2U Ed Ex FullStack Coding Bootcamp | Remote 2022 - Present 
● 
Helping 30 - 35 students by answering questions, reviewing their code, helping with projects, and grading projects. 
● 
Assist Instructors during lectures by managing attendance, tracking chats, setting up breakout rooms, and helping 
other TA’s. 
Web Developer | Appfire | Remote | C o n t r a c t P o s i t i o n ( 2 m o n t h s ) 2023 
● 
Spearheaded the CMS migration project by efficiently transferring critical content from WordPress to a modern 
Strapi CMS, ensuring seamless integration with Next.js frameworks. 
Technical Support | ServiceNow | Remote 2021 - 2022 
● 
Updating an average of 15 tickets a day to keep customers informed and provide solutions. 
● 
Assist customers with technical implementations of the ServiceNow platform. 
● 
Answer technical questions about the ServiceNow software and platform. 
● 
Reporting bugs to the Development team when confirmed in Platform. 
TECHNICAL PROJECT EXPERIENCE 
Color Palette Generator | Code | Demo 
● 
Color palette generator that uses OpenAI's Completion API to ge 
nerate color palettes based on a given prompt. 
Reading Speed App | Code | Demo 
● 
A single-serving app to see what it feels like to read at d ifferent speeds. It's a tiny app I quickly built with Svelte 
Rock Paper Scissors Lizard Spock | Code | Demo 
● 
RPSLS is a game I built to learn more about the Vue.js framework and to learn the basics of game logic. 
Employee Directory | Code | Demo 
● 
React web application that uses a Rest API to bring in user data, to quickly prototype a common real world solution 
like viewing and sorting employees by different criteria. 
Code Quiz | Code | Demo 
● 
Quiz app, specifically a code quiz app that tests your knowledge on web development. 
EDUCATION 
FullStack Web Developer Certificate | University of Central Florida | 2020 
Associates in Science in Graphic Design | Specialization Interactive Design | Valencia College | 2017
    
    `

    // const loader = new PDFLoader('resume.pdf', {
    //     parsedItemSeparator: " ",
    // });
    // const docs = await loader.load();
    // console.log(docs[0].pageContent);

    const model = new ChatOpenAI({ model: 'gpt-4', streaming: true});

    const parser = new StringOutputParser();

    const aboutJay = `
    Jay is a Software Engineer located in Orlando, Fl.
    He is currently an Intructional team member for Edx / 2U Coding Bootcamp.
    Jay has a passion for learning and teaching.
    He worked for a company called ThreatLocker doing Frontend Development.
    Was a Technical Support Engineer for ServiceNow
    `

    const resume = resumeContent;

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

    const userQuestion = question.messages[question.messages.length - 1].content;
    await sendEmail("New Question from Chatbot", `User asked: ${userQuestion}`);

    const stream = await chain.stream({ text: question.messages[question.messages.length - 1].content });
    const aiStream = LangChainAdapter.toAIStream(stream);
    return new StreamingTextResponse(aiStream);

}