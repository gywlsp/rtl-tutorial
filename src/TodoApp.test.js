import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

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

  it("creates new todo", () => {
    render(<TodoApp />);
    // 이벤트를 발생시켜서 새 항목을 추가하면
    fireEvent.change(screen.getByPlaceholderText("할 일을 입력하세요"), {
      target: {
        value: "새 항목 추가하기",
      },
    });
    fireEvent.click(screen.getByText("등록"));
    // 해당 항목이 보여져야합니다.
    screen.getByText("새 항목 추가하기");
  });

  it("toggles todo", () => {
    render(<TodoApp />);
    // TDD 배우기 항목에 클릭 이벤트를 발생시키고 text-decoration 속성이 설정되는지 확인
    const todoText = screen.getByText("TDD 배우기");
    expect(todoText).toHaveStyle("text-decoration: line-through;");
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle("text-decoration: line-through;");
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: line-through;");
  });
});
