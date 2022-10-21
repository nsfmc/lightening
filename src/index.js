import * as css from "./index.css";

function bar() {
  console.log("hoo", css.foo);
  return 2 + 2;
}

export function foo() {
  console.log("hey", bar());
  return bar();
}

foo();
