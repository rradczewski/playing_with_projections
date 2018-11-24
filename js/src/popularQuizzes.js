const { project, on } = require("./_project");
const pipe = require("./_pipe");

const storeQuizTitle = (state, event) => ({
  ...state,
  quizzes: {
    ...state.quizzes,
    [event.payload.quiz_id]: event.payload.quiz_title
  }
});

const countQuizPlayed = (state, event) => ({
  ...state,
  playCounter: {
    ...state.playCounter,
    [event.payload.quiz_id]: (state.playCounter[event.payload.quiz_id] || 0) + 1
  }
});

const collectData = project(
  on("QuizWasCreated", storeQuizTitle),
  on("GameWasOpened", countQuizPlayed)
)({ quizzes: {}, playCounter: {} });

const flattenQuizTitle = s =>
  Object.keys(s.playCounter).map(quiz_id => ({
    quiz_id,
    quiz_title: s.quizzes[quiz_id],
    times_played: s.playCounter[quiz_id] || 0
  }));

const sortByPlayCount = games =>
  games.slice().sort((ga, gb) => gb.times_played - ga.times_played);

module.exports = pipe(
  collectData,
  flattenQuizTitle,
  sortByPlayCount
);
