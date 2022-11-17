import { expect, it, describe } from "vitest";
import canReconfigure from "../src/canReconfigure";

describe("canReconfigure", () => {
  it("should be a function", () => {
    expect(typeof canReconfigure).toBe("function");
  });

  it("should throw if a parameter is missing", () => {
    expect(() => canReconfigure()).toThrow();
    expect(() => canReconfigure("abc")).toThrow();
    expect(() => canReconfigure(undefined, "abc")).toThrow();
  });

  it("should throw if a parameter is not a string", () => {
    expect(() => canReconfigure(1, "abc")).toThrow();
    expect(() => canReconfigure("abc", 1)).toThrow();
    expect(() => canReconfigure(0, 1)).toThrow();
  });

  it("should return a boolean", () => {
    expect(canReconfigure("abc", "abc")).toBeTypeOf("boolean");
  });

  it("should return false if strings have different lenght", () => {
    expect(canReconfigure("abc", "de")).toBe(false);
  });
  it("should return false if strings have different lenght event with same unique letters", () => {
    expect(canReconfigure("aab", "ab")).toBe(false);
  });

  it("should return a false if strings have different number of unic letters", () => {
    expect(canReconfigure("abc", "dee")).toBe(false);
  });

  it("should return a false if strings have different order of transformation", () => {
    expect(canReconfigure("xbox", "xxbo")).toBe(false);
  });

  it("should return a false if strings have different order of transformation", () => {
    expect(canReconfigure("abcd", "defg")).toBe(true);
  });
});
