module.exports = (events) => 
  events.reduce((playersWhoNeverPlayed, event) => {
    if(event.type === 'PlayerHasRegistered') {
      return [...playersWhoNeverPlayed, event.payload];
    } else if(event.type === 'PlayerJoinedGame') {
      return playersWhoNeverPlayed.filter(({player_id}) => player_id !== event.payload.player_id);
    }
    return playersWhoNeverPlayed;
  }, []);
