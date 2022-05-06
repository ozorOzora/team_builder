import tournament from "./database.json" assert { type: "json" };

/** Enter your name to join a team in the tournament */
function joinTournament(name){

    const team = tournament.pop() || [];
    
    if(team.length>5){

        tournament.push(team);
        tournament.push([name]);

    } else {

        team.push(name);
        tournament.push(team);
    }
}
export { joinTournament, tournament };