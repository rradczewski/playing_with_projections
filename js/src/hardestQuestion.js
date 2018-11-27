const { project, on } = require("./_project");
const pipe = require("./_pipe");
const log = require("./_log");

const saveQuestion = (state, event) =>
  Object.assign({}, state, {
    [event.payload.question_id]: {
      ...event.payload,
      timesAsked: 0,
      timesCorrect: 0
    }
  });

const countAnswer = (state, { payload: { question_id, answer } }) =>
  Object.assign(state, {
    [question_id]: Object.assign(state[question_id], {
      timesAsked: state[question_id].timesAsked + 1,
      timesCorrect:
        state[question_id].timesCorrect +
        (answer === state[question_id].answer ? 1 : 0)
    })
  });

const filterUnaskedQuestions = questions =>
  questions.filter(({ timesAsked }) => timesAsked !== 0);

const extractHardestAnswer = questions =>
  questions.sort(
    (qa, qb) =>
      qa.timesCorrect / qa.timesAsked - qb.timesCorrect / qb.timesAsked
  )[0];

module.exports = pipe(
  project(
    on("QuestionAddedToQuiz", saveQuestion),
    on("AnswerWasGiven", countAnswer)
  )({}),
  questions => Object.values(questions),
  filterUnaskedQuestions,
  extractHardestAnswer
);
