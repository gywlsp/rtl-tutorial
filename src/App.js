import React from "react";

import Profile from "./Profile";
import Counter from "./Counter";
import TodoApp from "./TodoApp";

const App = () => {
  return (
    <>
      <Profile username="gywlsp" name="박효진" />
      <Counter />
      <TodoApp />
    </>
  );
};

export default App;
