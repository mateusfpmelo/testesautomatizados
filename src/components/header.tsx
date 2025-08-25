import { Button } from "./ui/button";

export default function Header() {
    const scrollToForm = () => {
        const form = document.getElementById("form-section")
        form?.scrollIntoView({ behavior: "smooth" })
    }

    return(
        <header className="w-full min-h-[70vh] flex items-center justify-center bg-[#131313] text-[#fff] p-8">
            <div className="w-full max-w-[1200px] flex flex-col gap-2">
                <h1 className="text-2xl font-bold opacity-0 animate-zoomIn">Testes Automatizados: Exemplo <span className="text-[#B727F5]">React</span> + TypeScript +  <span className="text-[#B727F5]">Tailwind</span></h1>
                <p>Este projeto é uma mini landing page criada para demonstrar o uso de testes automatizados em um ambiente React + TypeScript + Tailwind. O objetivo é mostrar na prática <b>testes unitários</b> e <b>testes de integração</b>.</p>
                <div className="pt-4"><Button onClick={scrollToForm} children="Clique aqui para ir para o formulário" /></div>
            </div>
        </header>
    )

}