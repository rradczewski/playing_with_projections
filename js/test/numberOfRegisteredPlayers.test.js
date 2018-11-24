const numberOfRegisteredPlayers = require("../src/numberOfRegisteredPlayers");
const data0 = require("../../data/0.json");
const data2 = require("../../data/2.json");
const data5 = require("../../data/5_2015_01_2017_01.json");
const data10 = require("../../data/10_2015_01_2016_01.json");

describe("counting all 'PlayerHasRegistered' events", () => {
  it("should yield 0 for no events", () => {
    expect(numberOfRegisteredPlayers([])).toEqual(0);
  });

  it("should yield 0 if no player ever registered", () => {
    const data0WithoutSignup = data0.filter(({type}) => type !== "PlayerHasRegistered");
    expect(numberOfRegisteredPlayers(data0WithoutSignup)).toEqual(0);
  })

  it("should yield 1 for data0", () => {
    expect(numberOfRegisteredPlayers(data0)).toEqual(1);
  })

  it("should yield 218 for data2", () => {
    expect(numberOfRegisteredPlayers(data2)).toEqual(218);
  })

  it("should yield 158 for data5", () => {
    expect(numberOfRegisteredPlayers(data5)).toEqual(158);
  })

  it("should yield 254 for data10", () => {
    expect(numberOfRegisteredPlayers(data10)).toEqual(254);
  })
})
