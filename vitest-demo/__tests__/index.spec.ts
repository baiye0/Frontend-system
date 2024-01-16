import { expect, test } from "vitest";
import { testName } from "../src/index";

test("vitest-test", () => {
  expect(testName("jack")).toBe("jack");
});
