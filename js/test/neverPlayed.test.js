const neverPlayed = require("../src/neverPlayed");

let id = 1;
const Event = (type, payload) => ({id: `${id++}`, type, timestamp: new Date().toUTCString(), payload});

describe("neverPlayed should list all players who joined but never played", () => {
  it("should not list a player if they have joined at least one game", () => {
    const events = [
      Event("PlayerHasRegistered", { player_id: "1", first_name: "Bla", last_name: "Bla" }),
      Event("PlayerJoinedGame", { player_id: "1", game_id: "RANDOM_GAME" })
    ];

    expect(neverPlayed(events)).toEqual([]);
  });
  
  it("should list a player if they have not joined at least one game", () => {
    const events = [
      Event("PlayerHasRegistered", { player_id: "1", first_name: "Bla", last_name: "Bla" })
    ];

    expect(neverPlayed(events)).toEqual([{player_id: "1", first_name: "Bla", last_name: "Bla"}]);
  });
  
  it("should only list the player who hasn't played a single game", () => {
    const events = [
      Event("PlayerHasRegistered", { player_id: "1", first_name: "Bla", last_name: "Bla" }),
      Event("PlayerHasRegistered", { player_id: "2", first_name: "Bla", last_name: "Bla" }),
      Event("PlayerJoinedGame", { player_id: "1", game_id: "RANDOM_GAME" })
    ];

    expect(neverPlayed(events)).toEqual([{player_id: "2", first_name: "Bla", last_name: "Bla"}]);
  });
  
  it("should only list the player who hasn't played a single game, no matter when they signed up", () => {
    const events = [
      Event("PlayerHasRegistered", { player_id: "1", first_name: "Bla", last_name: "Bla" }),
      Event("PlayerJoinedGame", { player_id: "1", game_id: "RANDOM_GAME" }),
      Event("PlayerHasRegistered", { player_id: "2", first_name: "Bla", last_name: "Bla" })
    ];

    expect(neverPlayed(events)).toEqual([{player_id: "2", first_name: "Bla", last_name: "Bla"}]);
  });
  
  it("should list both players if they never played a game", () => {
    const events = [
      Event("PlayerHasRegistered", { player_id: "1", first_name: "Bla", last_name: "Bla" }),
      Event("PlayerHasRegistered", { player_id: "2", first_name: "Bla", last_name: "Bla" })
    ];

    expect(neverPlayed(events)).toEqual([
      {player_id: "1", first_name: "Bla", last_name: "Bla"}, 
      {player_id: "2", first_name: "Bla", last_name: "Bla"}
    ]);
  });
});
