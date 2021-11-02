// 桶排序
function bucketSort(nums) {
    const size = 10
    const [buckets, getHashMap] = HashMap(nums, size)

    for(let i=0; i<nums.length; i++) {
        let idx = getHashMap(nums[i])
        buckets[idx].push(nums[i])
    }

    nums.length = 0
    for(let i=0; i<buckets.length; i++) {
        if (buckets[i].length === 0) continue

        // 对桶内的数据排序 这里采用插入排序
        insertionSort(buckets[i])

        for(let j=0; j<buckets[i].length; j++) {
            nums.push(buckets[i][j])
        }
    }

    return nums
}

// 创建桶以及映射函数
function HashMap(nums, size) {
    let max = nums[0]
    let min = nums[0]
    let buckets = new Array(size)

    for(let i=1; i<nums.length; i++) {
        max = max > nums[i] ? max : nums[i]
        min = min < nums[i] ? min : nums[i]
    }
    
    for(let i=0; i<buckets.length; i++) {
        buckets[i] = []
    }

    let pivot = Math.floor((max - min) / size) + 1

    return [buckets, function(num) {
        return Math.floor(num / pivot)
    }]
}

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