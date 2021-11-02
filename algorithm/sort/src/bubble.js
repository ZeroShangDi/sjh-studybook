// 冒泡排序
function bubbleSort(nums) {
    let len = nums.length
    for(let i=len; i>0; i--) {
        for(let j=0; j<i-1; j++) {
            if (nums[j] > nums[j+1]) temp(nums, j, j + 1)
        }
    }
}

// 数据解构版位置互换
function temp(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
}