// Importa funções do React Testing Library e o componente que será testado
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FormSection from "./formsection";

// Agrupa testes relacionados ao componente FormSection
describe("FormSection - integração", () => {

  // Antes de cada teste, limpa qualquer mock criado em testes anteriores
  beforeEach(() => {
    jest.restoreAllMocks(); // restaura mocks para não interferirem em outros testes
  });

  // Define um teste individual
  it("envia o formulário com sucesso e mostra mensagem", async () => {
    
    // Mock do fetch, simulando uma resposta de API
    global.fetch = jest.fn().mockResolvedValue({
      status: 201, // código HTTP simulado
      ok: true,    // indica sucesso
      json: async () => ({ id: 123 }), // corpo da resposta simulada
    });

    // Renderiza o componente FormSection no DOM virtual de teste
    render(<FormSection />);

    // Simula clique no botão que abre o formulário
    fireEvent.click(screen.getByRole("button", { name: /abrir formulário/i }));

    // Simula o usuário preenchendo os campos do formulário
    fireEvent.change(screen.getByLabelText(/seu nome/i), { target: { value: "Mateus" } });
    fireEvent.change(screen.getByLabelText(/seu email/i), { target: { value: "mateus@email.com" } });
    fireEvent.change(screen.getByLabelText(/sua mensagem/i), { target: { value: "Olá!" } });

    // Simula o clique no botão de envio do formulário
    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

    // Espera até que a mensagem de sucesso seja exibida
    await waitFor(() =>
      expect(screen.getByText(/sua mensagem foi enviada com sucesso/i)).toBeInTheDocument()
    );

    // Verifica se o ID retornado pelo fetch mock também aparece no DOM
    expect(screen.getByText(/123/)).toBeInTheDocument();

    // Verifica se os campos do formulário foram limpos após o envio
    expect(screen.getByLabelText(/seu nome/i)).toHaveValue("");
    expect(screen.getByLabelText(/seu email/i)).toHaveValue("");
    expect(screen.getByLabelText(/sua mensagem/i)).toHaveValue("");
  });
});