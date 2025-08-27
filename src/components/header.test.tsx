// importando funções da React Testing Library
// - render: serve para "desenhar" o componente em um ambiente de teste
// - screen: usado para consultar/buscar elementos renderizados
import { render, screen } from "@testing-library/react";
// importando o componente que será testado
import Header from "./header";

describe("Header", () => {
  // 👉 este bloco é executado antes de CADA teste
  // aqui renderizamos o Header, evitando repetir `render(<Header />)` em cada `it`
  beforeEach(() => {
    render(<Header />);
  });

  it("renderiza o título corretamente", () => {
    // getByRole busca elementos pelo papel (role) de acessibilidade
    // { level: 1 } significa que queremos o <h1>
    const titulo = screen.getByRole("heading", { level: 1 });
    // verificamos se o texto dentro do título é o esperado
    expect(titulo).toHaveTextContent("Testes Automatizados: Exemplo");
  });

  it("renderiza o parágrafo corretamente", () => {
    // getByText procura um elemento que contenha o texto especificado
    // aqui usamos regex `/.../i` para ignorar diferenças de maiúsculas/minúsculas
    const paragrafo = screen.getByText(/Este projeto é uma mini landing page/i);
    // verificamos se o parágrafo realmente está no documento
    expect(paragrafo).toBeInTheDocument();
  });

  it("renderiza o botão corretamente", () => {
    // getByRole novamente, mas agora buscando um botão
    // usamos { name: ... } para garantir que é o botão com esse texto acessível
    const botao = screen.getByRole("button", { name: /Clique aqui para ir para o formulário/i });
    // expectativa: o botão deve existir na tela
    expect(botao).toBeInTheDocument();
  });

  it("chama scrollIntoView ao clicar", () => {
    // criamos um "mock" da função scrollIntoView
    // assim conseguimos verificar se ela foi chamada
    const scrollIntoViewMock = jest.fn();

    // criamos manualmente uma div com id "form-section"
    // isso simula a seção do formulário que o botão deveria rolar até
    const formSection = document.createElement("div");
    formSection.id = "form-section";
    // substituímos a função real por nosso mock
    formSection.scrollIntoView = scrollIntoViewMock;
    // adicionamos essa div falsa ao DOM do teste
    document.body.appendChild(formSection);

    // pegamos o botão que deve acionar o scroll
    const botao = screen.getByRole("button", { name: /Clique aqui para ir para o formulário/i });
    // simulamos o clique
    botao.click();

    // expectativa: a função mockada foi chamada
    expect(scrollIntoViewMock).toHaveBeenCalled();
  });
});