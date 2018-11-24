const { project, on } = require("./_project");

module.exports = project(
  on("PlayerHasRegistered", (state, event) => {
    const key = event.timestamp.substr(0, 7);

    return {
      ...state,
      [key]: (state[key] || 0) + 1
    };
  })
)({});
