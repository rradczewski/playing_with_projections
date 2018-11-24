const numberOfRegisteredPlayersByMonth = require("../src/numberOfRegisteredPlayersByMonth");
const data0 = require("../../data/0.json");

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
});
