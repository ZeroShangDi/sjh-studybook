// 快速排序
// 本函数以数组的首个元素为基准
function quickSort(nums) {
    if (nums.length < 2) return nums
    let left = [], right = []
    while(nums.length > 1) {
        let num = nums.pop()
        if (num >= nums[0]) {
            right.push(num)
        } else {
            left.push(num)
        }
    }
    return [...quickSort(left), nums[0], ...quickSort(right)]
}