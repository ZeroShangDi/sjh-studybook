/**
 * 根据目录生成文件
 * 
 * 需求:
 *      1、根据目录生成对应的文件, 格式 [序号][问题].md
 *      2、以生成的文件不需要再次生成, 生成文件结束之后, 根据生成的文件更新对应的目录.md
 * 
*/

const fs = require('fs')
const cat = fs.readFileSync(__dirname + '/catalogue.md')
const catList = cat.toString().split('\n')

// let readme = []
fs.mkdirSync(__dirname + '/dist')
for(let i=1; i<catList.length; i++) {
    let idx = (i + '').padStart(4, 0)
    let name = catList[i].replace('/', 'or')
    const path = __dirname + `/dist/${i}.${name}.md`
    fs.writeFileSync(path, `# ${name}`)
}


//检测文件或者文件夹存在 nodeJS
function fsExistsSync(path) {
    try{
        fs.accessSync(path,fs.F_OK);
    }catch(e){
        return false;
    }
    return true;
}

console.log(fs.writeFileSync(__dirname+'/src/aaa.md', 'sss'))