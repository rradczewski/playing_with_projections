// Write your projection here
function eventCounter(events) {
  return events.reduce((acc, event) => acc + 1, 0);
}

module.exports = eventCounter;
