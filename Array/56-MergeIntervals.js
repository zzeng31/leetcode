/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // sort the first number of the intervals with increasing order
  let current = intervals[0]; // set the current interval
  let result = [];
  // loop through the intervals skipping the first one
  for (let i = 1; i < intervals.length; i++) {
    // if the  end of current interval is greater or equal than the start number loop interval, that means that are overlaped
    if (current[1] >= intervals[i][0]) {
      current[1] = Math.max(current[1], intervals[i][1]); // replace the end of current interval with the higher end of current and loop interval
    }
    // if the  end of current interval is smaller than the start number loop interval, they are not overlaped
    else {
      result.push(current); // push the current interval because it is not overlap with any other intervals
      current = intervals[i]; // update current interval to the loop interval
    }
  }
  result.push(current); // the last interval needs to be added into result
  return result;
};
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
