function stringChop(str, size) {
  // your code here
	if (str == null) {
    return '';
  }
  let trimmed = str.trim();
  if (trimmed.length == 0) {
    return '';
  }
  let resultArr = [];
  let j = 0;
  while (j < trimmed.length) {
    let count = 0;
    let resultString = '';
    while (count < size) {
      resultString += trimmed.charAt(j);
      count++;
      j++;
    }
    resultArr.push(resultString);
  }
  return resultArr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
