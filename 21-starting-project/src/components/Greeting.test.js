import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const outputElement = screen.getByText("It's good to see ya.", {
      exact: true,
    });
    expect(outputElement).toBeInTheDocument;
  });

  test("render a different paragraph when button was clicked", () => {
    // Arange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("changed", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument;
  });

  test("does not render first paragraph if the button was clicked", () => {
    // Arange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see ya", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
