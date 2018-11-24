const fold = require("./_fold");

module.exports = fold((state, event) => {
  if (event.type !== "PlayerHasRegistered") return state;

  const key = event.timestamp.substr(0, 7);

  return {
    ...state,
    [key]: (state[key] || 0)+1
  };
}, {});
