import reducer, { increase, decrease } from "./counter.js";

describe("counter", () => {
  it("increases count inside of the state", () => {
    expect(reducer({ count: 10 }, decrease())).toEqual({
      count: 9
    });
  });
});

describe("counter", () => {
  it("increases count inside of the state", () => {
    expect(reducer(undefined, increase())).toEqual({
      count: 1
    });
  });
});
