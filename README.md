# InsertionSort
Insertion sort written in JS

http://shanghaiseagull.com/index.php/2017/10/11/insertion-sort/

There's an outer index and inner index.

The outer index typical loops through the array. It represents the index
of the element that we want to insert.

    valueToInsert = array[outerIndex]

For each outer index, we have a inner index that finds the niche to insert
this value.

There are 2 conditions that the inner index must satisfy:

1) innerIndex > 0

2) array[innerIndex-1] > valueToInsert


As long as the innerIndex is larger 0, and the previous element is larger than
the value we're trying to insert, we want move the previous element into the
current location at innerIndex.

This is done so that we find a location where the previous element is smaller than
what we're trying to insert. Thus, this ensures that we sort our values from
smallest to largest. Kind of like how we do it for a deck of cards.

![](http://shanghaiseagull.com/wp-content/uploads/2017/10/insertionsort_ex_a.jpg)
