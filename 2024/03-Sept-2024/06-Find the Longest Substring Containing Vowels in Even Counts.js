/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  if (
    s.split('').filter((a) => a === "a").length === 0 &&
    s.split('').filter((a) => a === "e").length === 0 &&
    s.split('').filter((a) => a === "i").length === 0 &&
    s.split('').filter((a) => a === "o").length === 0 &&
    s.split('').filter((a) => a === "u").length === 0
  )
    return s.length;

  let stringsExtracted = [];
  let lengths = [];
  for (let i = 0; i < s.length; i++) {
    for (j = i + 1; j < s.length; j++) {
      stringsExtracted.push(s.substring(i, j));
    }
  }
  stringsExtracted.forEach((individualString) => {
    individualString = individualString.split("");
    if (
      individualString.filter((a) => a === "a").length % 2 === 0 &&
      individualString.filter((a) => a === "e").length % 2 === 0 &&
      individualString.filter((a) => a === "i").length % 2 === 0 &&
      individualString.filter((a) => a === "o").length % 2 === 0 &&
      individualString.filter((a) => a === "u").length % 2 === 0
    ) {
      lengths.push(individualString.length);
    }
  });
  return Math.max(...lengths);
};

console.log(">> ", findTheLongestSubstring("bcbcbc"));
