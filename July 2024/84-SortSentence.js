/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let finalSentence = {};
    let response = [];
    s = s.split(' ');
    for (let i = 0; i < s.length; i++) {
        let regex = /[0-9]/;
        let indexOfNumber = s[i].match(regex);
        if (indexOfNumber && indexOfNumber[0]) {
            s[i] = s[i].replace(regex, '');
            finalSentence = {...finalSentence, [indexOfNumber[0]]: s[i]}
        }
    }
    Object.entries(finalSentence).sort((a, b) =>  parseInt(a[0]) - parseInt(b[0])).forEach(a => {
        response.push(a[1])
    });
    return response.join(' ');
};

console.log('>> ', sortSentence('is2 sentence4 This1 a3 xx'))