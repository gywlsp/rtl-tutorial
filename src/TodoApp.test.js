import React from "react";
import { render, screen } from "@testing-library/react";

import TodoApp from "./TodoApp";

describe("<TodoApp />", () => {
  it("renders TodoForm and TodoList", () => {
    render(<TodoApp />);
    screen.getByText("등록"); // TodoForm 존재유무 확인
    screen.getByTestId("TodoList"); // TodoList 존재유무 확인
  });

  it("renders two defaults todos", () => {
    render(<TodoApp />);
    screen.getByText("TDD 배우기");
    screen.getByText("react-testing-library 사용하기");
  });
});
