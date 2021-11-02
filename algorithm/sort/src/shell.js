// 希尔排序
function shellSort(nums) {
    let len = nums.length, gap = len
    while(gap = getGap(gap)) {
        for(let i=0; i<nums.length; i++) {
            let k = i, num = nums[i]
            while(k - gap >= 0 && num < nums[k - gap]) {
                nums[k] = nums[k - gap] // * 复习点
                k = k - gap
            }
            nums[k] = num
        }
    }
}

// 获取增量
function getGap(len) {
    return Math.floor(len/2)
}