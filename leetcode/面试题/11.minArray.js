/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  
 * https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
 */
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    if(numbers.length==0) return null
    if(numbers.length==1) return numbers[0]
    let i;
    for (i = 1; i < numbers.length; i++) {
        if(numbers[i]<numbers[i-1]) break
    }
    return i==numbers.length?numbers[0]:numbers[i];
};

console.log(minArray([1,3,5]));