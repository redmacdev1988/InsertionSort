#include <iostream>

using namespace std;

// feature 1
// feature 2
// feature 3
bool prevElem_GTE_toInsert(int currentValue, int toInsertValue) {
    return (currentValue >= toInsertValue);
}

void findInsertionPoint(int arr [], int outerIndex) {
    
    
    int valueToInsert = arr[outerIndex];
    int innerIndex = outerIndex;
    cout << "\nFind niche to insert value " << valueToInsert << endl;
    
    while (innerIndex > 0 &&
           prevElem_GTE_toInsert(arr[innerIndex-1], valueToInsert)) {
        arr[innerIndex] = arr[innerIndex-1];
        innerIndex--;
    }
    
    cout << "\nniche found at: " << innerIndex << ", for value " << valueToInsert;
    arr[innerIndex] = valueToInsert;
}


void insertionSort(int arr [], int size) {
    
    cout << "\nSorting an array that is: " << size << endl;
    for ( int outerIndex = 1; outerIndex <= size-1; outerIndex++) {
        cout << "\n=== outerIndex: " << outerIndex << " ====" << endl;
        findInsertionPoint(arr, outerIndex);
    }
}



int main() {

    int arr [] = {387, 3,1, 7,100, 2,88, 9,1};
    int size = sizeof(arr) / sizeof(int);
    
    insertionSort(arr, size);
    
    cout << "\n---- result ----" << endl;
    for ( int i = 0; i < size; i++) {
        cout << arr[i] << endl;
    }
    return 0;
}
