"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [question, setQuestion] = useState('')    
    const [answer, setAnswer] = useState('')
  
    const fetchData = async () => {
        const response = await fetch('/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text: question })
        });
        const data = await response.json();
        setAnswer(data.result);
      };

  return (
    <div className="flex flex-col my-10">
      <nav className="mb-5">
        <ul className="flex font-bold text-md">
          <li className="mr-5 transition duration-300 hover:scale-110 hover:text-yellow-500">
            <Link href="/">ABOUT</Link>
          </li>
          <li className="mr-5 transition duration-300 hover:scale-110 hover:text-yellow-500">
            <Link href="/projects">PROJECTS</Link>
          </li>
          <li className="underline underline-offset-8 decoration-sky-500">
            <Link href="/chatbot">ASK MY BOT</Link>
          </li>
        </ul>
      </nav>
      <section className="section lg:h-80 overflow-auto leading-relaxed">
        <h1 className="text-2xl font-black mb-3">Ask my Bot</h1>
        <p className="my-3">My chatbot is a really simple bot built Open AI API and Langchain. For now 
            it can only answer questions about me based on my resume, 
            but I plan to expand it to answer more questions in the future.
        </p>
        <input 
          type="text"
          placeholder="Ask away..." 
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border-2 border-gray-300 rounded-lg p-2 w-full mb-5 text-black"
        />
        <button 
          onClick={fetchData}
          className="bg-cyan-400 text-white font-bold py-2 px-4 rounded"
        >Submit</button>
       <p className="my-3">{answer}</p>
      </section>
    </div>
  );
}
