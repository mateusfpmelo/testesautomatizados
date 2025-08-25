import React, { useState } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

export default function FormSection() {
    const [showForm, setShowForm] = useState(false)

    return(
        <section id="form-section" className="w-full min-h-[40vh] flex items-center justify-center bg-[#fff] text-[#131313] p-8">
            <div className="w-full max-w-[1200px] flex flex-col gap-2">
                <h2 className="text-xl font-bold opacity-0 animate-zoomIn">Preencha o <span className="text-[#B727F5]">Formulário</span></h2>
                <p>Este projeto é uma mini landing page criada para demonstrar o uso de testes automatizados em um ambiente React + TypeScript + Tailwind. O objetivo é mostrar como aplicar boas práticas de <b>qualidade de software</b>.</p>
                {!showForm ? (
                    <div><Button children="Abrir formulário" onClick={() => setShowForm(true)} /></div>
                    ) : (
                        <>

                            <div className="w-full flex justify-end">
                                <button
                                    onClick={() => setShowForm(false)} aria-label="Fechar formulário" className="rounded-full bg-[#C7C7C7] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" >
                                    <X className="w-6 h-6 text-[#131313] hover:text-[#fff]" />
                                </button>
                            </div>
                            <form className="flex flex-col gap-4 bg-[#2a2a2a] p-6 rounded">
                                <input
                                type="text" placeholder="Seu nome" className="p-2 rounded text-black" />
                                <input type="email" placeholder="Seu email" className="p-2 rounded text-black" />
                                <Button type="submit">Enviar</Button>
                            </form>
                        </>
                )}
                
            </div>
        </section>
    )

}