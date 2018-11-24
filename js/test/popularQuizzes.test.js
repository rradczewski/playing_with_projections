const popularQuizzes = require("../src/popularQuizzes");
const data0 = require("../../data/0.json");
const data2 = require("../../data/2.json");
const data5 = require("../../data/5_2015_01_2017_01.json");
const data10 = require("../../data/10_2015_01_2016_01.json");

describe("should count every time a game was started and yield them by popularity", () => {
  it("should yield [] for no game", () => {
    expect(popularQuizzes([])).toEqual([]);
  });

  it("should yield [] if no game was ever played", () => {
    expect(popularQuizzes(data0)).toEqual([]);
  });

  it("should yield all quizzes in data2 order of their popularity", () => {
    expect(popularQuizzes(data2).slice(0, 10)).toEqual([
      {
        quiz_id: "63cd41a8-9c65-4bec-b7bb-261dc76466eb",
        quiz_title: "Gotta catch em all",
        times_played: 14
      },
      {
        quiz_id: "a74a6ce4-99e5-413f-a963-b9b701ada30d",
        quiz_title: "Gotta catch em all",
        times_played: 13
      },
      {
        quiz_id: "870dc098-c6b9-4806-a50a-5dc0e50fe435",
        quiz_title: "Superhero quiz",
        times_played: 12
      },
      {
        quiz_id: "f8e2bbf6-a028-41c1-8d0d-c67294b20abb",
        quiz_title: "Wedge Antilles's quiz",
        times_played: 12
      },
      {
        quiz_id: "8f513042-b07c-42c9-b5c3-7fd6a0996fe0",
        quiz_title: "Only for Neimoidians",
        times_played: 11
      },
      {
        quiz_id: "6f368abd-7a9f-4dfb-8063-d9cd787cdd18",
        quiz_title: "Superpowers!",
        times_played: 11
      },
      {
        quiz_id: "cf193d03-bdf6-4290-a097-be1d39d9355f",
        quiz_title: "All about Tyrion Lannister",
        times_played: 11
      },
      {
        quiz_id: "2b691828-1c90-4cdf-a53c-fcf8bcbcc3be",
        quiz_title: "Superhero quiz",
        times_played: 10
      },
      {
        quiz_id: "db28a039-f8dc-4879-8ff9-7ee688afec0e",
        quiz_title: "Superhero quiz",
        times_played: 10
      },
      {
        quiz_id: "4d9d481e-c1da-4ff9-adb1-724bf28d9537",
        quiz_title: "What happened in Qarth",
        times_played: 10
      }
    ]);
  });

  it("should yield all quizzes in data5 order of their popularity", () => {
    expect(popularQuizzes(data5).slice(0, 10)).toEqual([
      { quiz_id: "362", quiz_title: "C3E87", times_played: 117 },
      { quiz_id: "697", quiz_title: "8A0E1", times_played: 54 },
      { quiz_id: "344", quiz_title: "B3967", times_played: 34 },
      { quiz_id: "610", quiz_title: "00AC8", times_played: 32 },
      { quiz_id: "426", quiz_title: "6ECBD", times_played: 30 },
      { quiz_id: "617", quiz_title: "5D44E", times_played: 28 },
      { quiz_id: "508", quiz_title: "389BC", times_played: 27 },
      { quiz_id: "415", quiz_title: "42E7A", times_played: 27 },
      { quiz_id: "794", quiz_title: "82489", times_played: 25 },
      { quiz_id: "851", quiz_title: "92FB0", times_played: 24 }
    ]);
  });
});
