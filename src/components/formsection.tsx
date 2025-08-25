import React, { useState } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

export default function FormSection() {
    const [showForm, setShowForm] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [btnLoading, setBtnLoading] = useState(false)

    type ApiResponse = {
        status: number;
        ok: boolean;
        body: any; // você pode trocar `any` por um tipo mais específico depois
    };

    const [returnReq, setReturnReq] = useState<ApiResponse | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setReturnReq(null)
    setBtnLoading(true)

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    const fullResponse: ApiResponse = {
        status: response.status,
        ok: response.ok,
        body: data,
    };

    setReturnReq(fullResponse);
    setName("")
    setEmail("")
    setMessage("")
    setBtnLoading(false)
    };
    return(
        <section id="form-section" className="w-full min-h-[40vh] flex items-center justify-center bg-[#fff] text-[#131313] py-16 px-8">
            <div className="w-full max-w-[1200px] flex flex-col gap-2">
                <h2 className="text-xl font-bold opacity-0 animate-zoomIn">Preencha o <span className="text-[#B727F5]">Formulário</span></h2>
                <p>Este projeto é uma mini landing page criada para demonstrar o uso de testes automatizados em um ambiente React + TypeScript + Tailwind. O objetivo é mostrar como aplicar boas práticas de <b>qualidade de software</b>.</p>
                {!showForm ? (
                    <div><Button children="Abrir formulário" onClick={() => setShowForm(true)} /></div>
                    ) : (
                        <>

                            <div className="w-full flex justify-end">
                                <button
                                    onClick={() => setShowForm(false)} aria-label="Fechar formulário" className="rounded-full bg-[#C7C7C7] hover:bg-gray-800 focus:outline-none focus:ring-2 " >
                                    <X className="w-6 h-6 text-[#131313] hover:text-[#fff]" />
                                </button>
                            </div>
                            <form className="flex flex-col gap-4 p-6 rounded" onSubmit={handleSubmit}>
                                <input required type="text" id="name" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Seu nome" aria-label="Seu nome" className="p-2 rounded text-[#121212] border-2 [#131313] focus:ring-2 focus:ring-[#FF00F2]" />
                                <input required type="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Seu email" aria-label="Seu email" className="p-2 rounded text-[#121212] border-2 [#131313] focus:ring-2 focus:ring-[#FF00F2]"/>
                                <input type="text" id="message" value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="Sua mensagem" aria-label="Sua mensagem" className="p-2 rounded text-[#121212] border-2 [#131313] focus:ring-2 focus:ring-[#FF00F2]"/>
                                <Button disabled={btnLoading} type="submit">Enviar</Button>
                                {returnReq && (
                                    <div className="w-full flex justify-start">
                                        <div
                                        className={`w-full rounded-2xl px-4 py-3 shadow-md border ${
                                            returnReq.ok
                                            ? "bg-[#E6FFFA] border-[#38B2AC] text-[#285E61]" 
                                            : "bg-[#FFF5F5] border-[#F56565] text-[#C53030]"
                                        }`}
                                        >
                                        {returnReq.ok ? (
                                            <p>
                                            ✅ Sua mensagem foi enviada com sucesso! <br />
                                            <span className="font-semibold">Status:</span> {returnReq.status} <br />
                                            <span className="font-semibold">ID retornado:</span>{" "}
                                            {returnReq.body.id}
                                            </p>
                                        ) : (
                                            <p>
                                            ❌ Ocorreu um erro ao enviar sua mensagem. <br />
                                            <span className="font-semibold">Status:</span> {returnReq.status}
                                            </p>
                                        )}
                                        </div>
                                    </div>
                                )}
                            </form>
                        </>

                )}
                
            </div>
        </section>
    )

}