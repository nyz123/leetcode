/**
 * 【题目】两数之和：
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */
var twoSum = function(nums, target) {
    var obj = {};
    for(let i=0,len=nums.length;i<len;i++){
        let leave = target-nums[i];
        if(obj[leave]>=0){
            return [obj[leave],i]
        }else{
            obj[nums[i]]=i
        }
    }
};

// 执行用时 : 96 ms, 在Two Sum的JavaScript提交中击败了81.53% 的用户
// 内存消耗 : 34.2 MB, 在Two Sum的JavaScript提交中击败了0.99% 的用户