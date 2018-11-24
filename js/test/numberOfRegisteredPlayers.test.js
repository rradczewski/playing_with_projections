const numberOfRegisteredPlayers = require("../src/numberOfRegisteredPlayers");
const data0 = require("../../data/0.json");

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
})
