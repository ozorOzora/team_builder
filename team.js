import team from "./database.json" assert { type: "json" };

/** Enter your name to join the team */
function joinTeam(name){
    
    if(team.length>5){

        return "Sorry team full ❤️";

    } else{

        team.push(name);
    }
}

export { joinTeam, team };