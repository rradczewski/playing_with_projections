const numberOfRegisteredPlayersByMonth = require("../src/numberOfRegisteredPlayersByMonth");
const data0 = require("../../data/0.json");
const data2 = require("../../data/2.json");
const data5 = require("../../data/5_2015_01_2017_01.json");
const data10 = require("../../data/10_2015_01_2016_01.json");

describe("Counting all 'PlayerHasRegistered' events by month", () => {
  it("should yield 0 for no events", () => {
    expect(numberOfRegisteredPlayersByMonth([])).toEqual({});
  });

  it("should yield an empty object if no player ever registered", () => {
    const data0WithoutSignup = data0.filter(
      ({ type }) => type !== "PlayerHasRegistered"
    );
    expect(numberOfRegisteredPlayersByMonth(data0WithoutSignup)).toEqual({});
  });

  it("should yield one sign up in 2016-09 for 0.json", () => {
    expect(numberOfRegisteredPlayersByMonth(data0)).toEqual({ "2016-09": 1 });
  });

  it("should yield one sign up in 2016-09 for 0.json", () => {
    expect(numberOfRegisteredPlayersByMonth(data2)).toEqual({
      "2016-04": 2,
      "2016-05": 1,
      "2016-06": 8,
      "2016-07": 16,
      "2016-08": 27,
      "2016-09": 64,
      "2016-10": 52,
      "2016-11": 28,
      "2016-12": 16,
      "2017-01": 3,
      "2017-03": 1
    });
  });

  it("should work with 5_2015_01_2017_01.json", () => {
    expect(numberOfRegisteredPlayersByMonth(data5)).toEqual({
      "2015-01": 5,
      "2015-02": 5,
      "2015-03": 5,
      "2015-04": 6,
      "2015-05": 6,
      "2015-06": 4,
      "2015-07": 5,
      "2015-08": 6,
      "2015-09": 3,
      "2015-10": 5,
      "2015-11": 8,
      "2015-12": 12,
      "2016-01": 8,
      "2016-02": 8,
      "2016-03": 10,
      "2016-04": 11,
      "2016-05": 12,
      "2016-06": 9,
      "2016-07": 6,
      "2016-08": 5,
      "2016-09": 6,
      "2016-10": 5,
      "2016-11": 8
    });
  });

  it("should work with 10_2015_01_2016_01.json", () => {
    expect(numberOfRegisteredPlayersByMonth(data10)).toEqual({
      "2015-03": 26,
      "2015-04": 24,
      "2015-05": 12,
      "2015-06": 25,
      "2015-07": 18,
      "2015-08": 20,
      "2015-09": 30,
      "2015-10": 22,
      "2015-11": 25,
      "2015-12": 52
    });
  });
});
