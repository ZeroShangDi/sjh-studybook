
function insertSort(nums) {
    for(let i=1; i<nums.length; i++) {
        let j = i - 1, num = nums[i]
        while(num < nums[j]) j--
        nums.splice(i, 1)
        nums.splice(j + 1, 0, num)
    }
    return nums
}
console.log(insertSort([2, 1, 3, 6, 4, 5]))