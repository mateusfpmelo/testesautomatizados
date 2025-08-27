import { render, screen, fireEvent } from "@testing-library/react";
import FormSection from "./formsection";

describe("FormSection - comportamento básico", () => {
  it("abre e fecha o formulário ao clicar nos botões", () => {
    render(<FormSection />);

    // No início deve aparecer o botão "Abrir formulário"
    const abrirBtn = screen.getByRole("button", { name: /abrir formulário/i });
    expect(abrirBtn).toBeInTheDocument();

    // Clica para abrir o formulário
    fireEvent.click(abrirBtn);

    // Agora deve aparecer o botão de fechar (ícone com aria-label)
    const fecharBtn = screen.getByRole("button", { name: /fechar formulário/i });
    expect(fecharBtn).toBeInTheDocument();

    // Clica para fechar o formulário
    fireEvent.click(fecharBtn);

    // Deve voltar a mostrar só o botão de abrir
    expect(screen.getByRole("button", { name: /abrir formulário/i })).toBeInTheDocument();
  });
});