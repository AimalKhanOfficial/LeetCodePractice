/**
 * @param {string[]} emails
 * @return {number}
 */
//Solved - https://leetcode.com/problems/unique-email-addresses/submissions/1395400469/
var numUniqueEmails = function(emails) {
    let map = [];
    for (let i = 0; i < emails.length; i++) {
        let email = emails[i];
        email = email.split('@');
        let name = email[0].split('+');
        let finalEmail = name[0].replaceAll('.', '') + '@' + email[1];
        if (!map.includes(finalEmail)) {
            map.push(finalEmail)
        }   
    }
    return map.length;
};

console.log('>> uniqueEmails', numUniqueEmails(emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))