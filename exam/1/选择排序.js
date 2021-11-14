
function selectSort(nums) {
    for(let i=0; i<nums.length; i++) {
        let idx = getMinIdx(nums, i)
        let min = nums[idx]
        nums.splice(idx, 1)
        nums.splice(i, 0, min)
    }
    return nums
}

function getMinIdx(nums, star) {
    let ind = star
    for(let i=star; i<nums.length; i++) {
       if (nums[i] < nums[ind]) ind = i
    }
    return ind
}

console.log(selectSort([2, 1, 3, 6, 4, 5]))