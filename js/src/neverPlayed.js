module.exports = (events) => {
  return events
    .reduce((playersWhoNeverPlayed, event) => {
      if(event.type === 'PlayerHasRegistered') {
        return [...playersWhoNeverPlayed, event.payload];
      }
      if(event.type === 'PlayerJoinedGame') {
        return playersWhoNeverPlayed.filter(({player_id}) => event.payload.player_id !== player_id);
      }
      return playersWhoNeverPlayed;
    }, []);
};

