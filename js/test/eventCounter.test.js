const eventCounter = require("../src/eventCounter");
const data0 = require("../../data/0.json");

it("should yield 0 if there are no events", () => {
  expect(eventCounter([])).toEqual(0);
});

it("should yield the number of events", () => {
  expect(eventCounter(data0)).toEqual(4);
});
