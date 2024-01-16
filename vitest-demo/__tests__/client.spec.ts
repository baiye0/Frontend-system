import { expect, test } from "vitest";
import { domStr } from "../src/client";

test("test-client", () => {
  document.body.innerHTML = domStr;
  expect(document.getElementById("test")?.innerHTML).contain("123");
});
