const isAfter = require("date-fns/is_after");
const subMonths = require("date-fns/sub_months");

const { project, on } = require("./_project");
const pipe = require("./_pipe");
const log = require("./_log");

const savePlayerName = (state, event) => {
  const inactivePlayers = new Set(state.inactivePlayers);
  inactivePlayers.add(event.payload.player_id);

  return {
    ...state,
    names: {
      inactivePlayers,
      ...state.names,
      [event.payload.player_id]: {
        first_name: event.payload.first_name,
        last_name: event.payload.last_name
      }
    }
  };
};

const onPlayerPlayedGame = (state, event) => {
  const timePlayed = new Date(event.timestamp);
  const countsAsActive = isAfter(timePlayed, state.activeAfter);

  let inactivePlayers = new Set(state.inactivePlayers);

  if (countsAsActive) {
    inactivePlayers.delete(event.payload.player_id);
  } else {
    inactivePlayers.add(event.payload.player_id);
  }

  return {
    ...state,
    inactivePlayers,
    playCount: {
      ...state.playCount,
      [event.payload.player_id]:
        (state.playCount[event.payload.player_id] || 0) + 1
    }
  };
};

const collectData = since =>
  project(
    on("PlayerHasRegistered", savePlayerName),
    on("PlayerJoinedGame", onPlayerPlayedGame)
  )({
    inactivePlayers: new Set(),
    names: {},
    playCount: {},
    activeAfter: subMonths(since, 1)
  });

const flattenInactivePlayers = state =>
  Array.from(state.inactivePlayers).map(player_id => ({
    player_id,
    ...state.names[player_id],
    games_played: state.playCount[player_id]
  }));

const sortByGamesPlayed = state =>
  state.slice().sort((pa, pb) => pb.games_played - pa.games_played);

module.exports = since =>
  pipe(
    collectData(since),
    flattenInactivePlayers,
    sortByGamesPlayed
  );
