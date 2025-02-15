const getScore = (playerScores) => {
    let finalSore = 0;
    for (let i = 0; i < playerScores.length; i++) {
        if (playerScores[i - 1] === 10 || playerScores[i - 2] === 10) {
            finalSore = finalSore + (2 * playerScores[i]);
        } else {
            finalSore += playerScores[i];
        }
    }
    return finalSore;
}

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    const player1Score = getScore(player1);
    const player2Score = getScore(player2);
    return player1Score === player2Score ? 0 : player1Score > player2Score ? 1 : 2;
};

console.log('>>', isWinner(player1 = [5,10,3,2], player2 = [6,5,7,3]))