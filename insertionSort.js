"user strict";

//When N is guaranteed to be small,
//including as the base case of a quick sort or merge sort.
//While this is O(N^2), it has a very small constant and is a stable sort.

var dataArray = [8, 5, 3, 12];

function findInsertionPoint(array, outerIndex) {
    var valueToInsert = array[outerIndex];
    var innerIndex = outerIndex;

    console.log("Find niche to insert: " + valueToInsert);

    while(innerIndex > 0 && (array[innerIndex-1] >= valueToInsert)) {
        console.log("innerIndex: " + innerIndex);
        array[innerIndex] = array[innerIndex-1];
        innerIndex--;
    }
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
