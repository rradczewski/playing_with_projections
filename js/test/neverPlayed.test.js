const neverPlayed = require("../src/neverPlayed");

let id = 1;
const Event = (type, payload) => ({id: `${id++}`, type, timestamp: new Date().toUTCString(), payload});

describe("neverPlayed should list all players who joined but never played", () => {
  it("lists no player if there are none", () => {
    expect(neverPlayed([])).toEqual([]);
  });

  it("lists a single player ", () => {
    const events = [
      Event("PlayerHasRegistered", { player_id: "1", first_name: "Bla", last_name: "Bla" })
    ];

    expect(neverPlayed(events)).toEqual([
      { player_id: "1", first_name: "Bla", last_name: "Bla" }
    ]);
  });
  
  it("lists both players", () => {
    const events = [
      Event("PlayerHasRegistered", { player_id: "1", first_name: "Bla", last_name: "Bla" }),
      Event("PlayerHasRegistered", { player_id: "2", first_name: "Bla", last_name: "Bla" })
    ];

    expect(neverPlayed(events)).toEqual([
      { player_id: "1", first_name: "Bla", last_name: "Bla" },
      { player_id: "2", first_name: "Bla", last_name: "Bla" }
    ]);
  });
  
  it("lists a single player who has created a game", () => {
    const events = [
      Event("PlayerHasRegistered", { player_id: "1", first_name: "Bla", last_name: "Bla" }),
      Event("QuizWasCreated", { owner_id: "1", quiz_id: "Q1", quiz_title: "Other event in stream" })
    ];

    expect(neverPlayed(events)).toEqual([
      { player_id: "1", first_name: "Bla", last_name: "Bla" }
    ]);
  });

  it("lists all players who registered given there were no games", () => {
    const events = [
      Event("PlayerHasRegistered", { player_id: "1", first_name: "Bla", last_name: "Bla" }),
      Event("QuizWasCreated", { owner_id: "1", quiz_id: "Q1", quiz_title: "Other event in stream" }),
      Event("PlayerHasRegistered", { player_id: "2", first_name: "Bla", last_name: "Bla" })
    ];

    expect(neverPlayed(events)).toEqual([
      { player_id: "1", first_name: "Bla", last_name: "Bla" },
      { player_id: "2", first_name: "Bla", last_name: "Bla" },
    ]);
  });

  it("should not list a player who has joined any game", () => {
    const events = [
      Event("PlayerHasRegistered", { player_id: "1", first_name: "Bla", last_name: "Bla" }),
      Event("PlayerJoinedGame", { player_id: "1", game_id: "SOME_GAME" }),
      Event("PlayerHasRegistered", { player_id: "2", first_name: "Bla", last_name: "Bla" })
    ];

    expect(neverPlayed(events)).toEqual([
      { player_id: "2", first_name: "Bla", last_name: "Bla" }
    ]);
  });


});
