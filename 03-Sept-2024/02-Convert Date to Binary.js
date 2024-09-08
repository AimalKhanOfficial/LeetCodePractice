function text2Binary(string) {
  return string
    .split("")
    .map(function (char) {
      return char.charCodeAt(0).toString(2);
    })
    .join(" ");
}

/**
 * @param {string} date
 * @return {string}
 */
//https://leetcode.com/problems/convert-date-to-binary/submissions/1383285287/
var convertDateToBinary = function (date) {
  date = date.split("-");
  let result = [];
  for (let i = 0; i < date.length; i++) {
    date[i] = parseInt(date[i], 10).toString(2);
    result.push(date[i]);
    // let datePart = parseInt(date[i].toString(), 10);
    // datePart = datePart.toString();
    // datePart = text2Binary(datePart);
    // datePart = datePart.split(" ");
    // let result = '';
    // for (let j = 0; j < datePart.length; j++) {
    //     result += BigInt(`0b${datePart[j]}`).toString(2);
    // }
    // console.log(result);
  }
  return result.join('-')
};

console.log(">> convertDateToBinary", convertDateToBinary("2080-02-29"));
