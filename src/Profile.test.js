/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
  // 스냅샷 테스팅: 렌더링된 결과가 이전에 렌더링한 결과와 일치하는지 확인하는 작업
  // 컴포넌트가 렌더링됐을 때 이 스냅샷과 일치하지 않으면 테스트 실패
  // 스냅샷 업데이트하고 싶다면 테스트가 실행되고 있는 콘솔 창에서 u키 누르면 됨.
  it("matches snapshot", () => {
    // render()가 호출되면 결과물에는 DOM을 선택할 수 있는 다양한 쿼리들과 container가 포함되어 있음.
    // 다양한 쿼리: https://testing-library.com/docs/queries/about/
    // container는 해당 컴포넌트의 최상위 DOM을 가리키고, 이를 가지고 스냅샷 테스팅을 할 수 있음.
    const utils = render(<Profile username="gywlsp" name="박효진" />);
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(<Profile username="gywlsp" name="박효진" />);
    // getByText(:쿼리 함수), 텍스트를 사용해서 원하는 DOM 선택 가능
    // 다른 쿼리 함수: https://velog.io/@velopert/react-testing-library#%EB%8B%A4%EC%96%91%ED%95%9C-%EC%BF%BC%EB%A6%AC
    utils.getByText("gywlsp"); // gywlsp 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText("(박효진)"); // (박효진) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/박/); // 정규식 /박/ 을 통과하는 엘리먼트가 있는지 확인
  });
});
