const easiestQuestion = require("../src/easiestQuestion");
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

describe("easiestQuestion should yield the question that is most answered correctly for each quiz", () => {
  it("should work between two questions", () => {
    expect(easiestQuestion(eventStream)).toEqual({
      question_id: "FIRST_QUESTION",
      quiz_id: "SOME_QUIZ",
      question: "Where can I find Horsea?",
      answer: "Anistar City",
      timesAsked: 2,
      timesCorrect: 2
    });
  });

  it("should work for dataSet0", () => {
    // No question ever answered
    expect(easiestQuestion(data0)).toEqual(undefined);
  });

  it("should work for dataSet2", () => {
    expect(easiestQuestion(data2)).toEqual({
      answer: "violet",
      difficulty: 106.0423340213786,
      question: "What color is the banner of the house of Lannister?",
      question_id: "585464e9-aedb-4de0-a764-d0f3b2088f1a",
      quiz_id: "bf51a682-0bdf-4ec6-bb98-4d7c8321493e",
      timesAsked: 5,
      timesCorrect: 5
    });
  });

  it("should work for dataSet5", () => {
    expect(easiestQuestion(data5)).toEqual({
      answer: "8005D",
      question: "4F6FF",
      question_id: "382",
      quiz_id: "377",
      timesAsked: 11,
      timesCorrect: 9
    });
  });

  it("should work for dataSet10", () => {
    expect(easiestQuestion(data10)).toEqual({
      answer: "C36AA",
      question: "07563",
      question_id: "521",
      quiz_id: "516",
      timesAsked: 8,
      timesCorrect: 8
    });
  });
});
