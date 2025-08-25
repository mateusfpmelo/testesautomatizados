import React from "react";

export default function Header() {

    return(
        <header className="w-full h-[80vh] flex items-center justify-center bg-[#131313] text-[#fff]">
            <div className="w-full max-w-[1200px] flex flex-col gap-2">
                <h1 className="text-2xl font-bold opacity-0 animate-zoomIn">Testes Automatizados: Exemplo React + TypeScript + Tailwind</h1>
                <p className="opacity-0 animate-slideLeft">Este projeto é uma mini landing page criada para demonstrar o uso de testes automatizados em um ambiente React + TypeScript + Tailwind. O objetivo é mostrar na prática <b>testes unitários</b> e <b>testes de integração</b>.</p>
            </div>
        </header>
    )

}