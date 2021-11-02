// 插入排序
function insertionSort(nums) {
    for(let i=1; i<nums.length; i++) {
        let j = i - 1
        let num = nums[i]
        while(j > 0 && num < nums[j]) j--
        nums.splice(i, 1)
        nums.splice(j + 1, 0, num)
    }
    return nums
}