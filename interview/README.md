# 经典面试题汇总

```javascript
// 地址: https://github.com/su37josephxia/frontend-interview/issues

// 获取方法: 跳转至页面在控制台执行下面的代码

const views = Array
    .from(document.querySelectorAll('.no-underline.markdown-title'))
    .reduce((t, n, i) => { t.push(n.innerText); return t }, [])
    .reverse()
    .join('\n')
console.log(views)

```