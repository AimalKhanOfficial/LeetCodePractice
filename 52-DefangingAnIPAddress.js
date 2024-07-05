/**
 * @param {string} address
 * @return {string}
 */
//https://leetcode.com/problems/defanging-an-ip-address/submissions/1310908797/
var defangIPaddr = function(address) {
    return address.replaceAll('.', '[.]')
};
