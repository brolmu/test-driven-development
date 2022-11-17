import { expect, it, describe } from "vitest";
import fizzbuzz from "../src/fizzbuzz";

describe("fizzbuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzbuzz).toBe("function");
  });

  it("should throw if not number is provide as parameter", () => {
    expect(() => fizzbuzz()).toThrow();
  });

  it("should throw a specific error message if not number is provide as parameter", () => {
    expect(() => fizzbuzz()).toThrow("parameter provider must be a number");
  });

  it("should throw a specific error message if not a number is provided", () => {
    expect(() => fizzbuzz(NaN)).toThrow("parameter provider must be a number");
  });

  it("should return the number provided is not multiple 3,5,15", () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(2)).toBe(2);
    expect(fizzbuzz(4)).toBe(4);
  });

  it("should return 'fizz' if number provided is multiple 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
    expect(fizzbuzz(12)).toBe("fizz");
  });

  it("should return 'buzz' if number provided is multiple 5", () => {
    
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(20)).toBe("buzz");
    expect(fizzbuzz(40)).toBe("buzz");
  });

  it("should return 'fizzbuzz' if number provided is multiple 15", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
    expect(fizzbuzz(30)).toBe("fizzbuzz");
    expect(fizzbuzz(45)).toBe("fizzbuzz");
    expect(fizzbuzz(60)).toBe("fizzbuzz");
  });
});
