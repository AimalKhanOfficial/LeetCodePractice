let hash = new Map();
//hash.set('1p3r73', 'https://leetcode.gov.com/problems/design-tinyurl');
//hash.set('9b3o11', 'http://www.example.com/book.aspx');


let generateIdentifier = (pathName = '') => {
    pathName = pathName.split('/').filter(a => a);
    let randomNumber = Math.floor(100000000 + Math.random() * 900000).toString(36);
    return randomNumber;
}

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    if (!longUrl) return '';
    let split = longUrl.split(/\.[a-z]*/).filter(a => a);
    let pathName = split.pop();
    let identifier = generateIdentifier(pathName);
    hash.set(identifier, longUrl);
    return 'http://tinyurl.com/' + identifier;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    if (!shortUrl) return '';
    let identifier = shortUrl.split('http://tinyurl.com/').filter(a => a).pop();
    return hash.get(identifier);
};

console.log('>>', encode('http://airport.example.com/'))
//console.log('>>', encode('https://leetcode.gov.com/problems/design-tinyurl'))
//console.log('>>', decode('http://tinyurl.com/9b3o11'));