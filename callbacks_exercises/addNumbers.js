const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  let num1;
  if (numsLeft > 0) {
    reader.question("Enter a numebr:", function(numString1) {
      num1 = parseInt(numString1);
      sum += num1;
      console.log(sum);
      numsLeft--;
      addNumbers(sum, numsLeft, completionCallback);
    });

  } else {
    completionCallback(sum);
  }
}


addNumbers(0, 3, function(sum) {
  console.log(`Total Sum: ${sum}`);
  reader.close();
  });
