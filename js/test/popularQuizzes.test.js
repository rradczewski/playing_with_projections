const popularQuizzes = require("../src/popularQuizzes");
const data0 = require("../../data/0.json");
const data5 = require("../../data/5_2015_01_2017_01.json");

describe("should count every time a game was started and yield them by popularity", () => {
  it("should yield [] for no game", () => {
    expect(popularQuizzes([])).toEqual([]);
  });

  it("should yield [] if no game was ever played", () => {
    expect(popularQuizzes(data0)).toEqual([]);
  });

  it("should yield all quizzes in order of their popularity", () => {
    expect(popularQuizzes(data5)[0]).toEqual({
      quiz_id: "362",
      quiz_title: "C3E87",
      times_played: 117
    });
  });
});
