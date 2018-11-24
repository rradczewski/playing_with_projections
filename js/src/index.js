var fs = require("fs");
var eventCounter = require("./eventCounter");
var numberOfRegisteredPlayers = require("./numberOfRegisteredPlayers");
var numberOfRegisteredPlayersByMonth = require("./numberOfRegisteredPlayersByMonth");
var popularQuizzes = require("./popularQuizzes");

const dataSets = [
  "0.json",
  "10_2015_01_2016_01.json",
  "1.json",
  "2.json",
  "4_2015_01_2017_01.json",
  "5_2015_01_2017_01.json",
  "6_2015_01_2017_01.json",
  "7_2015_01_2017_01.json",
  "8_2015_01_2016_01.json",
  "9_2015_01_2016_01.json"
];

const projections = {
  eventCounter,
  numberOfRegisteredPlayers,
  numberOfRegisteredPlayersByMonth,
  popularQizzes: e => popularQuizzes(e).slice(0, 2)
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
