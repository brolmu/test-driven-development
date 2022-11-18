import { expect, it, describe } from "vitest";
import countSheeps, { noaSheeps, noSheeps, sheeps } from "../src/countSheeps";

describe("countSheeps", () => {
  it("should be a function", () => {
    expect(typeof countSheeps).toBe("function");
  });

  it("should throw if not array is provide as parameter", () => {
    expect(() => countSheeps(1)).toThrow();
  });

  it("should throw array provide is empty", () => {
    expect(() => countSheeps(new Array())).toThrow();
  });

  it("should throw array provide is objects array", () => {
    expect(() => countSheeps([1, 2])).toThrow();
  });

  it("should return a array if provide a objects array", () => {
    expect(countSheeps(sheeps)).toBeTypeOf("object");
  });

  it("should return array with lenght 4 if provide noaSheeps color red", () => {
     expect(countSheeps(noaSheeps)).toHaveLength(4);
   });

  it("should return array with lenght 4 if provide noSheeps color red and N in name", () => {
    expect(countSheeps(noSheeps)).toHaveLength(3);
  });

  it("should return array with lenght 4 if provide noSheeps color red and N,a in name", () => {
    expect(countSheeps(sheeps)).toHaveLength(2);
  });
});
