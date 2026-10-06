function stringChop(str, size) {
  // your code here
	let resultArr = [];
  let j = 0;
  while(j < str.length){
    let count = 0;
    let resultString = "";
    while(count < size){
        resultString += str.charAt(j);
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
