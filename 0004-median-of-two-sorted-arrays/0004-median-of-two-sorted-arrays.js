/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2);
    nums = nums.sort((a, b) => {return a - b})
    const mid = nums.length / 2;
    if(nums.length % 2 == 0) {
        return (nums[mid - 1] + nums[mid]) / 2;        
    } else {
        return nums[Math.round(mid - 1)];
    }
};