const hardestQuestion = require("../src/hardestQuestion");
const data0 = require("../../data/0.json");
const data2 = require("../../data/2.json");
const data5 = require("../../data/5_2015_01_2017_01.json");
const data10 = require("../../data/10_2015_01_2016_01.json");

const eventStream = [
  {
    id: "21a63945-6068-4964-9ce9-ec59dfa51fda",
    type: "QuestionAddedToQuiz",
    timestamp: "2016-08-29T07:45:24Z",
    payload: {
      question_id: "FIRST_QUESTION",
      quiz_id: "SOME_QUIZ",
      question: "Where can I find Horsea?",
      answer: "Anistar City"
    }
  },
  {
    id: "21a63945-6068-4964-9ce9-ec59dfa51fda",
    type: "QuestionAddedToQuiz",
    timestamp: "2016-08-29T07:45:24Z",
    payload: {
      question_id: "SECOND_QUESTION",
      quiz_id: "SOME_QUIZ",
      question: "How many peas are in the pot?",
      answer: "137893"
    }
  },
  {
    id: "e5794d0b-89f4-492b-af4c-9948e41eb950",
    type: "AnswerWasGiven",
    timestamp: "2016-09-18T07:08:46Z",
    payload: {
      game_id: "SOME_GAME",
      question_id: "FIRST_QUESTION",
      player_id: "SOME_PLAYER",
      answer: "Anistar City"
    }
  },
  {
    id: "e5794d0b-89f4-492b-af4c-9948e41eb950",
    type: "AnswerWasGiven",
    timestamp: "2016-09-18T07:08:46Z",
    payload: {
      game_id: "SOME_GAME",
      question_id: "FIRST_QUESTION",
      player_id: "ANOTHER_PLAYER",
      answer: "Anistar City"
    }
  },
  {
    id: "e5794d0b-89f4-492b-af4c-9948e41eb950",
    type: "AnswerWasGiven",
    timestamp: "2016-09-18T07:08:46Z",
    payload: {
      game_id: "SOME_GAME",
      question_id: "SECOND_QUESTION",
      player_id: "SOME_PLAYER",
      answer: "137892"
    }
  },
  {
    id: "e5794d0b-89f4-492b-af4c-9948e41eb950",
    type: "AnswerWasGiven",
    timestamp: "2016-09-18T07:08:46Z",
    payload: {
      game_id: "SOME_GAME",
      question_id: "SECOND_QUESTION",
      player_id: "ANOTHER_PLAYER",
      answer: "137893"
    }
  }
];

describe("hardestQuestion should yield the question that is rarely answered correctly for each quiz", () => {
  it("should work between two questions", () => {
    expect(hardestQuestion(eventStream)).toEqual({
      quiz_id: "SOME_QUIZ",
      question_id: "SECOND_QUESTION",
      question: "How many peas are in the pot?",
      answer: "137893",
      timesAsked: 2,
      timesCorrect: 1
    });
  });

  it("should work for dataSet0", () => {
    // No question ever answered
    expect(hardestQuestion(data0)).toEqual(undefined);
  });

  it("should work for dataSet2", () => {
    expect(hardestQuestion(data2)).toEqual({
      answer: "purple",
      difficulty: 138.31256432673186,
      question: "What color is the banner of the house of Stark?",
      question_id: "07759c6b-1727-42b4-ad97-f0912da4296a",
      quiz_id: "f982a8b5-d069-4caf-bb35-4c10361b9210",
      timesAsked: 25,
      timesCorrect: 0
    });
  });

  it("should work for dataSet5", () => {
    expect(hardestQuestion(data5)).toEqual({
      answer: "09690",
      question: "08D98",
      question_id: "682",
      quiz_id: "679",
      timesAsked: 71,
      timesCorrect: 25
    });
  });

  it("should work for dataSet10", () => {
    expect(hardestQuestion(data10)).toEqual({
      answer: "79CC9",
      question: "DB85E",
      question_id: "566",
      quiz_id: "565",
      timesAsked: 19,
      timesCorrect: 8
    });
  });
});
