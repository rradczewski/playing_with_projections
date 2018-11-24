const fold = require("./_fold");

const project = (...ons) => initialState =>
  fold((state, e) => {
    for (let on of ons) {
      if (on.type === e.type) return on.fn(state, e);
    }
    return state;
  }, initialState );

const on = (type, fn) => ({ type, fn });

module.exports = {
  project,
  on
};
