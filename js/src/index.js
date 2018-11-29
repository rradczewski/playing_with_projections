var fs = require("fs");
var eventCounter = require("./eventCounter");
var numberOfRegisteredPlayers = require("./numberOfRegisteredPlayers");
var numberOfRegisteredPlayersByMonth = require("./numberOfRegisteredPlayersByMonth");
var popularQuizzes = require("./popularQuizzes");
var hardestQuestion = require("./hardestQuestion");
var easiestQuestion = require("./easiestQuestion");
var neverPlayed = require("./neverPlayed");

const dataSets = [
  "0.json",
  "1.json",
  "2.json",
  "5_2015_01_2017_01.json",
  "10_2015_01_2016_01.json",
];

const projections = {
  eventCounter,
  numberOfRegisteredPlayers,
  numberOfRegisteredPlayersByMonth,
  popularQizzes: e => popularQuizzes(e).slice(0, 2),
  hardestQuestion,
  easiestQuestion,
  neverPlayed
};

function parseFile(file) {
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

const loadedDataSets = dataSets.reduce(
  (data, filename) =>
    Object.assign({}, data, { [filename]: parseFile(`../data/${filename}`) }),
  {}
);

for (let projection in projections) {
  for (let dataSet in loadedDataSets) {
    console.log(
      `${projection}\t${dataSet}: ${JSON.stringify(
        projections[projection](loadedDataSets[dataSet])
      )}`
    );
  }
}
