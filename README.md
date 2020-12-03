# InsertionSort
Insertion sort written in JS

http://chineseruleof8.com/code/index.php/2017/10/11/insertion-sort/

There's an outer index and inner index.

The outer index typical loops through the array. It represents the index
of the element that we want to insert.

    valueToInsert = array[outerIndex]

For each outer index, we have a inner index that finds the niche to insert
this value.

There are 2 conditions that the inner index must satisfy:

1) innerIndex > 0

2) array[innerIndex-1] > valueToInsert


As long as the innerIndex is larger 0, and **the previous element is larger than
the value we're trying to insert**, we want move the previous element into the
current location at innerIndex.

This is done so that we find a location where the previous element is smaller than
what we're trying to insert. Thus, this ensures that we sort our values from
smallest to largest. Kind of like how we do it for a deck of cards.

![](http://www.geeksforgeeks.org/wp-content/uploads/gq/2013/03/Insertion-Sort-300x257.jpg)

# Running Time

The **best case** input is an array that is already sorted. During each iteration, the first remaining element of the input is only compared with the right-most element of the sorted subsection of the array.

The simplest **worst case** input is an array sorted in reverse order. In these cases every iteration of the inner loop will scan and shift the entire sorted subsection of the array before inserting the next element. This gives insertion sort a quadratic running time (i.e., O(n2)).

The **average case** is also quadratic, which makes insertion sort impractical for sorting large arrays. However, **insertion sort is one of the fastest algorithms for sorting very small arrays**. 

testing 1 23
