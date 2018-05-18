const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`${el1} > ${el2}? type 'yes' or 'no' `, function(numString1) {
    let response = numString1;
    if (response === 'yes') {
      console.log("response yes");
      callback(true);

    } else {
      callback(false);
    }
  });
}


// askIfGreaterThan(9, 19, (el) => console.log(el));

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
        console.log(arr);
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

// innerBubbleSortLoop([3, 2, 1], 0, false, function () {
//   console.log("in outer bubble sort");
//   // reader.close();
// });
//

function absurdBubbleSort(arr, sortCompletionCallback) {
  outerBubbleSortLoop(true);

  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
}

absurdBubbleSort([4, 5, 3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
