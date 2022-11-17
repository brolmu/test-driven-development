import { evaluate } from "mathjs";
import React from "react";
import { useState } from "react";

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
export const operations = ["+", "-", "/", "*"];
export const equalText = "=";

export default function Calculator() {
  const [value, setValue] = useState("");

  function createHandleNumber(n) {
    if (typeof value === "string") setValue(value.concat(n));
    else {
        const draft = value.toString();
        setValue(draft.concat(n))
    }
  }

  return (
    <section>
      <h1>Calculator</h1>

      <input value={value} readOnly />

      <div role="grid">
        {rows.map((row, idx) => {
          return (
            <div key={idx} role="row">
              {row.map((n) => {
                return (
                  <button onClick={() => createHandleNumber(n)} key={n}>
                    {n}
                  </button>
                );
              })}
            </div>
          );
        })}

        {operations.map((o) => {
          return (
            <button onClick={() => createHandleNumber(o)} key={o}>
              {o}
            </button>
          );
        })}

        <button onClick={() => setValue(evaluate(value))}>{equalText}</button>
      </div>
    </section>
  );
}
