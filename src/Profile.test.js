/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile username="gywlsp" name="박효진" />);
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(<Profile username="gywlsp" name="박효진" />);
    utils.getByText("gywlsp"); // velopert 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText("(박효진)"); // (김민준) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/박/); // 정규식 /김/ 을 통과하는 엘리먼트가 있는지 확인
  });
});
