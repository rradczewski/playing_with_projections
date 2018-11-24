const eventCounter = require("../src/eventCounter");
const data0 = require("../../data/0.json");
const data2 = require("../../data/2.json");
const data5 = require("../../data/5_2015_01_2017_01.json");
const data10 = require("../../data/10_2015_01_2016_01.json");

it("should yield 0 if there are no events", () => {
  expect(eventCounter([])).toEqual(0);
});

it("should yield the number of events in data0", () => {
  expect(eventCounter(data0)).toEqual(4);
});

it("should yield the number of events in data2", () => {
  expect(eventCounter(data2)).toEqual(43727);
});

it("should yield the number of events in data5", () => {
  expect(eventCounter(data5)).toEqual(104712);
});

it("should yield the number of events in data10", () => {
  expect(eventCounter(data10)).toEqual(48960);
});
