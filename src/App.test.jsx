import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, it, expect, jest } from "@jest/globals"; // it o test sono equivalenti
import App from "./App.jsx";

describe("testApp", () => {
  it("renderizza Welcome", () => {
    render(<App />);

    const welcomeTitle = screen.getByText(/benvenuti in epibooks/i);

    expect(welcomeTitle).toBeInTheDocument();
  });

  it("renderizza 150 cards", () => {
    render(<App />);
    const card = screen.queryAllByTestId("book-card");
    expect(card).toHaveLength(150);
  });

  it("renderizza CommentArea", async () => {
    render(<App />);
    const card = screen.queryAllByTestId("book-card");
    const img = within(card[0]).queryByRole("img");
    await userEvent.click(img);
    const title = await screen.findByText(/Recensioni:/i);
    expect(title).toBeInTheDocument();
  });

  it("verifica che il filtraggio dei libri tramite navbar funzioni", async () => {
    render(<App />);
    const allCardsBefore = screen.getAllByTestId("book-card");
    const initialCount = allCardsBefore.length;
    const searchInput = screen.getByPlaceholderText(/cerca un libro/i);
    fireEvent.change(searchInput, { target: { value: "the last wish" } });
    const filteredCards = screen.getAllByTestId("book-card");
    expect(filteredCards.length).toBeLessThan(initialCount);
    const foundBooks = screen.getAllByText(/the last wish/i);
    expect(foundBooks.length).toBeGreaterThan(0);
  });

  it("verifica che cliccando su un libro il suo bordo cambi colore", () => {
    render(<App />);
    const allCards = screen.getAllByTestId("book-card");
    const firstCard = allCards[0];
    fireEvent.click(firstCard);
    expect(firstCard).toHaveStyle("border: 3px solid red");
  });

  it("verifica che cliccando su un secondo libro il bordo del primo torni normale", () => {
    render(<App />);

    const allCards = screen.getAllByTestId("book-card");
    const firstCard = allCards[0];
    const secondCard = allCards[1];
    fireEvent.click(firstCard);
    expect(firstCard).toHaveStyle("border: 3px solid red");
    fireEvent.click(secondCard);
    expect(secondCard).toHaveStyle("border: 3px solid red");
    expect(firstCard).not.toHaveStyle("border: 3px solid red");
  });

  it("verifica che all'avvio non ci siano commenti visualizzati", () => {
    render(<App />);
    const placeholderMessage = screen.getByText(/seleziona un libro per vedere i commenti/i);
    expect(placeholderMessage).toBeInTheDocument();
    const singleComment = screen.queryByText(/voto:/i);
    expect(singleComment).not.toBeInTheDocument();
  });

  it("carica correttamente le recensioni nel DOM quando si clicca su un libro", async () => {
    render(<App />);

    const allCards = screen.getAllByTestId("book-card");
    fireEvent.click(allCards[0]);
    const comments = await screen.findAllByTestId("single-comment");
    expect(comments.length).toBeGreaterThan(0);
  });
});
