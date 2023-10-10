import { describe, it, expect, vi } from "vitest";
import { $ } from "../main";

describe("miniQuery", () => {
  it("does nothing", () => {
    expect(true).toBe(true);
  });
});

describe("length()", () => {
  it("returns length correctly", () => {
    const div = document.createElement("div");
    div.innerHTML = `
    <button class="btn" type="button">button 1</button>
    <button class="btn" type="button">button 2</button>
    <button class="btn" type="button">button 3</button>
    <button class="btn" type="button">button 4</button>
    `;
    expect($(".btn", div).length()).toBe(4);
  });
});