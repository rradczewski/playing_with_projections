const eventCounter = require("../src/eventCounter");

it("should yield 0 if there are no events", () => {
  expect(eventCounter([])).toEqual(0);
});
