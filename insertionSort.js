/*
"user strict";

//When N is guaranteed to be small,
//including as the base case of a quick sort or merge sort.
//While this is O(N^2), it has a very small constant and is a stable sort.

var dataArray = [8, 5, 3, 12];


function prevElem_GTE_toInsert(currentValue, toInsertValue) {
  return (currentValue >= toInsertValue);
}

function findInsertionPoint(array, outerIndex) {
    var valueToInsert = array[outerIndex];
    var innerIndex = outerIndex;

    console.log("Find niche to insert: " + valueToInsert);


    while(innerIndex > 0 && prevElem_GTE_toInsert(array[innerIndex-1], valueToInsert)) {
        array[innerIndex] = array[innerIndex-1];
        innerIndex--;
    }

    console.log("niche found at: " + innerIndex + ", for value: " + valueToInsert);
    array[innerIndex] = valueToInsert;
}


function insertionSort(unsortedArray) {

      var data = unsortedArray.slice(0);

      for (var outerIndex = 1; outerIndex <= data.length-1; outerIndex++) {
        console.log("==== outerIndex: "+outerIndex+" ====");
        findInsertionPoint(data, outerIndex);
      }
      return data;
}

let sorted = insertionSort(dataArray);
console.log(sorted);
*/


// testing 1 2 3
function subsetSum(numbers, target, partial) {
  var s, n, remaining;

  partial = partial || [];

  // sum partial
  s = partial.reduce(function (a, b) {
    return a + b;
  }, 0);

  // check if the partial sum is equals to target
  if (s === target) {
    console.log("%s=%s", partial.join("+"), target)
  }

  if (s >= target) {
    return;  // if we reach the number why bother to continue
  }

  for (var i = 0; i < numbers.length; i++) {
    n = numbers[i];
    remaining = numbers.slice(i + 1);
    subsetSum(remaining, target, partial.concat([n]));
  }
}

subsetSum([3, 3, 3, 3, 4, 4, 4, 6, 6, 8, 12],12);

