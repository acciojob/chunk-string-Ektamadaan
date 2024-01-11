function stringChop(str, chunkLength) {
  // your code here
	const result = [];

	
  for (let i = 0; i < str.length; i = i + chunkLength) {
    const chunk = str.substring(i, i + chunkLength);
    result.push(chunk);
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
