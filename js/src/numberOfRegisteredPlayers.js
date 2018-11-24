const fold = require("./_fold");

module.exports = fold((state, event) => {
  if (event.type === "PlayerHasRegistered") return state + 1;
  return state;
}, 0);
