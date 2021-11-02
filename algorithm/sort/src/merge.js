// 归并算法
function mergeSort(nums) {
    if (nums.length < 2) return nums
    let i = Math.floor(nums.length / 2)
    return merge(
        mergeSort(nums.slice(0, i)),
        mergeSort(nums.slice(i))
    )
}

// 合并两个数组
function merge(l, r) {
    let res = []
    while(l.length || r.length) {
        if (!l.length || l[0] > r[0]) {
            res.push(r.shift())
        } else if (!r.length || l[0] <= r[0]) {
            res.push(l.shift())
        } else {
            //
        }
    }
    return res
}
