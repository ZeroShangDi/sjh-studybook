// 选择排序
function selectionSort(nums) {
    let i = 0, 
        len = nums.length
    while(i < len) {
        let min = getMinIdx(nums, i)
        temp(nums, i, min)
        i++
    }
    return nums
}

// 获取数组最小(注意范围)
function getMinIdx(nums, i) {
    let min = 0
    for(let j=i; j < nums.length; j++) {
        if (nums[j] < nums[min]) min = j
    }
    return min
}