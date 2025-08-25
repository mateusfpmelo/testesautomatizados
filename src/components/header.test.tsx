import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("Header", () => {
  describe("Título", () => {
    it("renderiza o título corretamente", () => {
      render(<Header />);
      const titulo = screen.getByRole("heading", { level: 1 });
      expect(titulo).toHaveTextContent("Testes Automatizados: Exemplo");
    });
  });

  describe("Parágrafo", () => {
    it("renderiza o parágrafo corretamente", () => {
      render(<Header />);
      const paragrafo = screen.getByText(/Este projeto é uma mini landing page/i);
      expect(paragrafo).toBeInTheDocument();
    });
  });

  describe("Header", () => {
    it("renderiza o botão corretamente", () => {
      render(<Header />);
      
      const botao = screen.getByRole("button", { name: /Clique aqui para ir para o formulário/i });
      expect(botao).toBeInTheDocument();
    });
  });

  describe("Botão scroll", () => {
    it("chama scrollIntoView ao clicar", () => {
      render(<Header />);

      // Mock da função scrollIntoView
      const scrollIntoViewMock = jest.fn();
      // Cria uma div falsa com id "form-section" para simular o destino
      const formSection = document.createElement("div");
      formSection.id = "form-section";
      // substitui scrollIntoView pelo mock
      formSection.scrollIntoView = scrollIntoViewMock;
      document.body.appendChild(formSection);

      const botao = screen.getByRole("button", { name: /Clique aqui para ir para o formulário/i });
      botao.click();

      expect(scrollIntoViewMock).toHaveBeenCalled();
    });
  });
  
});