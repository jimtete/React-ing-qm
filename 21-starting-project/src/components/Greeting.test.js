import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

describe("Greeting component", () => {
  test("redners hello world as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello world", { exact: false });
    expect(helloWorldElement).toBeInTheDocument;
  });

  test("renders first paragraph when button aint clicked", () => {
    // Arrange
    render(<Greeting/>);

    // Act
    
  })
});
