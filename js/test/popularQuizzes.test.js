const popularQuizzes = require("../src/popularQuizzes");
const data2 = require("../../data/2.json");

describe("should count every time a game was started and yield them by popularity", () => {
  it("should yield [] for no game", () => {
    expect(popularQuizzes([])).toEqual([]);
  })
});
