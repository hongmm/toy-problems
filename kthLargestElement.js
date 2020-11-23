// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Example 1:
// Input: [3,2,1,5,6,4] and k = 2
// Output: 5

// Example 2:
// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4

// I - unsorted array and k
// O - kth largest element within array
// C - You may assume k is always valid, 1 ≤ k ≤ array's length.
// E - none

var kthLargestElement = function(nums, k) {
  // need to go through all elements of array and sort
  var values = nums.sort(function(a, b) {
    return a - b;
  })
  values = values.reverse();
  return values[k-1];
}

console.log(kthLargestElement([3,2,1,5,6,4],2))
console.log(kthLargestElement([3,2,3,1,2,4,5,5,6],4))
console.log(kthLargestElement([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6], 2)) // 10
//debugger;