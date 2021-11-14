
function frontEach(root) {
    if (root === null) return
    return [
        root.val,
        ...frontEach(root.left),
        ...frontEach(root.right)
    ]
}