const fold = require("./_fold");
const pipe = require("./_pipe");

module.exports = pipe(
  fold(
    (state, event) => {
      return state;
    },
    { quizzes: {}, playCounter: {} }
  ),
  () => ([])
);
