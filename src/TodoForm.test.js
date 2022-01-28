import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";

import TodoForm from "./TodoForm";

describe("<TodoForm />", () => {
  const setup = (props = {}) => {
    render(<TodoForm {...props} />);
    const input = screen.getByPlaceholderText("할 일을 입력하세요"); // input 이 있는지 확인
    const button = screen.getByText("등록"); // button이 있는지 확인
    return {
      input,
      button,
    };
  };

  it("has input and a button", () => {
    const { input, button } = setup();
    expect(input).toBeTruthy(); // 해당 값이 truthy 한 값인지 확인
    expect(button).toBeTruthy();
  });

  it("changes input", () => {
    const { input } = setup();
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });

  it("calls onInsert and clears input", () => {
    const onInsert = jest.fn();
    const { input, button } = setup({ onInsert }); // props 가 필요 할땐 이렇게 직접 파라미터로 전달
    // 수정하고
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    // 버튼 클릭
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("TDD 배우기"); // onInsert 가 'TDD 배우기' 파라미터가 호출됐어야함
    expect(input).toHaveAttribute("value", ""); // input이 비워져야함
  });
});
