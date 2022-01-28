import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";

import TodoForm from "./TodoForm";

describe("<TodoForm />", () => {
  it("has input and a button", () => {
    render(<TodoForm />);
    screen.getByPlaceholderText("할 일을 입력하세요"); // input 이 있는지 확인
    screen.getByText("등록"); // button이 있는지 확인
  });

  it("changes input", () => {
    render(<TodoForm />);
    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });
});
