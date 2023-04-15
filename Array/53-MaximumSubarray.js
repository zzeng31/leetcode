/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums) return 0;
  let total = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    total = Math.max(total, nums[i]);
  }
  return total;
};
