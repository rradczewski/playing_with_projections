module.exports = (first_fn, ...fns) => (...args) =>
  fns.reduce((result, fn) => fn(result), first_fn.apply(null, args));
