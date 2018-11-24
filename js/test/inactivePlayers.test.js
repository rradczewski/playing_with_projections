const inactivePlayers = require("../src/inactivePlayers");
const data0 = require("../../data/0.json");
const data2 = require("../../data/2.json");
const data5 = require("../../data/5_2015_01_2017_01.json");
const data10 = require("../../data/10_2015_01_2016_01.json");

describe("Finding inactive players", () => {
  it("in data0", () => {
    const since = new Date("2017-03-20T16:45:03Z");
    const allInactive = [];

    expect(inactivePlayers(since)(data0).slice(0, 10)).toEqual(allInactive);
  });

  it("in data2", () => {
    const since = new Date("2017-03-20T16:45:03Z");
    const allInactive = [
      {
        first_name: "Greta",
        games_played: 103,
        last_name: "Keeling",
        player_id: "b900a7a1-c2ee-4142-ab97-0e4d42b9d656"
      },
      {
        first_name: "Jonas",
        games_played: 81,
        last_name: "Gaylord",
        player_id: "b83a1211-ec26-466c-9ad3-0072d43a9503"
      },
      {
        first_name: "Cordie",
        games_played: 74,
        last_name: "Satterfield",
        player_id: "548b12a9-8048-4404-b690-0e07728ac84c"
      },
      {
        first_name: "Darwin",
        games_played: 59,
        last_name: "Hills",
        player_id: "290b0d3a-f2da-44bf-ac22-9611843b969a"
      },
      {
        first_name: "Orlando",
        games_played: 58,
        last_name: "Howell",
        player_id: "ebb1b53d-3c12-4dcd-8899-7ec032ed6cd8"
      },
      {
        first_name: "Burnice",
        games_played: 56,
        last_name: "Stanton",
        player_id: "90c94365-23a4-4a1d-b861-9607458673c0"
      },
      {
        first_name: "Jeffery",
        games_played: 47,
        last_name: "Mante",
        player_id: "46653e43-885b-43c1-b963-31a2f7bddf0d"
      },
      {
        first_name: "Rhoda",
        games_played: 47,
        last_name: "Effertz",
        player_id: "7fb20412-5af7-45f9-8bac-6ede59647556"
      },
      {
        first_name: "Giovanny",
        games_played: 44,
        last_name: "Robel",
        player_id: "25a5d931-298a-4c7b-98b3-2835fe015241"
      },
      {
        first_name: "Yvette",
        games_played: 42,
        last_name: "Rempel",
        player_id: "7f8bcf2f-08f5-4b17-8c26-172e32fa6670"
      }
    ];

    expect(inactivePlayers(since)(data2).slice(0, 10)).toEqual(allInactive);
  });

  it("in data5", () => {
    const since = new Date("2016-12-18T22:50:34.390962Z");
    const allInactive = [
      {
        first_name: "C7E12",
        games_played: 81,
        last_name: "49FF",
        player_id: "87"
      },
      {
        first_name: "8F14E",
        games_played: 66,
        last_name: "45FC",
        player_id: "7"
      },
      {
        first_name: "A97DA",
        games_played: 61,
        last_name: "629B",
        player_id: "107"
      },
      {
        first_name: "FE9FC",
        games_played: 60,
        last_name: "289C",
        player_id: "83"
      },
      {
        first_name: "C51CE",
        games_played: 60,
        last_name: "410C",
        player_id: "13"
      },
      {
        first_name: "115F8",
        games_played: 60,
        last_name: "9503",
        player_id: "223"
      },
      {
        first_name: "3988C",
        games_played: 59,
        last_name: "7F88",
        player_id: "137"
      },
      {
        first_name: "54229",
        games_played: 58,
        last_name: "ABFC",
        player_id: "91"
      },
      {
        first_name: "63923",
        games_played: 58,
        last_name: "F49E",
        player_id: "275"
      },
      {
        first_name: "555D6",
        games_played: 58,
        last_name: "702C",
        player_id: "239"
      }
    ];

    expect(inactivePlayers(since)(data5).slice(0, 10)).toEqual(allInactive);
  });

  it("in data10", () => {
    const since = new Date("2015-12-31T16:26:23Z");
    const allInactive = [
      {
        first_name: "5878A",
        games_played: 83,
        last_name: "7AB8",
        player_id: "167"
      },
      {
        first_name: "0AA18",
        games_played: 83,
        last_name: "83C6",
        player_id: "191"
      },
      {
        first_name: "BD686",
        games_played: 81,
        last_name: "FD64",
        player_id: "193"
      },
      {
        first_name: "D1F49",
        games_played: 60,
        last_name: "1A40",
        player_id: "129"
      },
      {
        first_name: "577EF",
        games_played: 55,
        last_name: "1154",
        player_id: "235"
      },
      {
        first_name: "C0E19",
        games_played: 53,
        last_name: "0D82",
        player_id: "219"
      },
      {
        first_name: "D1C38",
        games_played: 52,
        last_name: "A09A",
        player_id: "225"
      },
      {
        first_name: "705F2",
        games_played: 52,
        last_name: "1728",
        player_id: "227"
      },
      {
        first_name: "9B04D",
        games_played: 52,
        last_name: "1528",
        player_id: "231"
      },
      {
        first_name: "077E2",
        games_played: 51,
        last_name: "9B11",
        player_id: "249"
      }
    ];

    expect(inactivePlayers(since)(data10).slice(0, 10)).toEqual(allInactive);
  });
});
