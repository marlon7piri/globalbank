const {
  render,
  screen,
  fireEvent,
  getByRole,
} = require("@testing-library/react");

const Formulario = require ("../components/Formulario");

describe("Formulario testing", () => {
  test("Comprobar que el componente Formulario se renderiza", () => {
    render(Formulario);

    const botonElement = screen.getByText(/Enviar:/i);
    expect(botonElement).toBeInTheDocument();
  });
});
