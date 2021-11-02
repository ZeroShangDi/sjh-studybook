// 计数排序
function countingSort(nums, max) {
    let ans = []
    let res = new Array(max + 1)
    for(let i=0; i<nums.length; i++) {
        let k = nums[i]
        res[k] = res[k] ? (res[k] + 1) : 1 
    }
    for(let i=0; i<res.length; i++) {
        while (res[i]) {
            ans.push(i)
            res[i] -= 1
        }
    }
    return ans
}
