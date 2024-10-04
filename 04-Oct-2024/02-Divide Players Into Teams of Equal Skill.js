/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    const teamsToCreate = skill.length / 2;
    const initialValue = 0;
    const teamPowerToTarget = skill.reduce((acc, curr) => acc + curr, initialValue) / teamsToCreate;
    const teams = [];
    let i = 0;
    while (teams.length < teamsToCreate) {
        let matchFound = false;
        let j = 0;
        while (!matchFound) {
            if (i === j) {
                j++;
                continue;
            };
            const sum = skill[i] + skill[j];
            if (sum === teamPowerToTarget) {
                teams.push([skill[i], skill[j]]);
                console.log('>> ', i, j, skill, teams);
                skill.splice(i, 1)
                skill.splice(j - 1, 1);
                matchFound = true;
            } else {
                if (j === skill.length) break;
                j++;
            }
        }
        i++;
        if (i === skill.length && teams.length < teamsToCreate) {
            i = 0;
        } 
    }
    return teams;
};

console.log('>>', dividePlayers([3,2,5,1,3,4]))