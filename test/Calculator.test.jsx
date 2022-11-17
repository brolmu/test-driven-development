import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { describe, it, afterEach, expect } from "vitest";
import Calculator, { equalText, numbers, operations } from "../src/Calculator";

describe("calculator", () => {
  afterEach(cleanup);

//   it("should render", () => {
//     render(<Calculator />);
//   });

  it("should render title correctly", () => {
    render(<Calculator />);
    screen.getByText("Calculator");
  });

  it("should render numbers", () => {
    render(<Calculator />);
    numbers.forEach((number) => {
      screen.getByText(number.toString());
    });
  });

  it("should render 4 row", () => {
    render(<Calculator />);

    const rows = screen.getAllByRole("row");

    expect(rows).toHaveLength(4);
  });

  it("should render operations", () => {
    render(<Calculator />);

    operations.forEach((operation) => {
      screen.getByText(operation);
    });
  });

  it("should render equal sign", () => {
    render(<Calculator />);

    screen.getByText(equalText);
  });

  it("should render input", () => {
    render(<Calculator />);

    screen.getByRole("textbox");
  });

  it("should user input after clicking numbers", () => {
    render(<Calculator />);
    numbers.forEach((n) => {
      const numString = n.toString();
      const number = screen.getByText(numString);
      fireEvent.click(number);
    });
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("0123456789");
  });

  it("should user input after clicking numbers and operations", () => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);

    const plus = screen.getByText("+");
    fireEvent.click(plus);
    fireEvent.click(one);

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("1+1");
  });

  it("should calculate based on user input and show the calculation", () => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);

    const plus = screen.getByText("+");
    fireEvent.click(plus);
    fireEvent.click(one);

    const equalSign = screen.getByText(equalText);
    fireEvent.click(equalSign);

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("2");
  });

  it("should calculate based on user input and concatenate operations", () => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);

    const plus = screen.getByText("+");
    fireEvent.click(plus);
    fireEvent.click(one);

    const equalSign = screen.getByText(equalText);
    fireEvent.click(equalSign);
    fireEvent.click(plus);

    const five = screen.getByText("5");
    fireEvent.click(five);
    fireEvent.click(equalSign);

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("7");
  });
});
