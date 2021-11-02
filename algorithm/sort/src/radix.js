// 基数排序
function radixSort(nums) {
    let digit = getMax(nums)
    for(let i=0; i<digit; i++) {
        let newNums = []
        let res = new Array(10).fill(1).map(() => [])
        for(let j=0; j<nums.length; j++) {
            let level = getNum(nums[j], i)
            res[level].push(nums[j])
        }
        for(let k=0; k<10; k++) {
            while(res[k].length) {
                newNums.push(res[k].shift())
            }
        }
        nums = newNums
    }
    return nums
}

// 获取当前位的值
function getNum(val, i) {
    return (val % Math.pow(10, i + 1)) / Math.pow(10, i)
}

// 获取最大数与其位数
function getMax(nums) {
    let max = 0, digit = 0
    for(let i=1; i<nums.length; i++) {
        if (nums[i] > nums[max]) max = i
    }
    max = nums[max]
    digit = (max + '').length
    return digit
}