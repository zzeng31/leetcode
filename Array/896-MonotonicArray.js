/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.



Example 1:

Input: nums = [1,2,2,3]
Output: true
Example 2:

Input: nums = [6,5,4,4]
Output: true
Example 3:

Input: nums = [1,3,2]
Output: false
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  // states of  montonic
  let increasing = true;
  let decreasing = true;
  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      decreasing = false; // change the state if fails decreasing pattern
    }
    if (nums[i] < nums[i + 1]) {
      // change the state if fails increasing pattern
      increasing = false;
    }
  }
  return increasing || decreasing; // return true if either one is true, because if it is not monotonic, it will be false for both
};

console.log(isMonotonic([6, 1, 4, 4]));
