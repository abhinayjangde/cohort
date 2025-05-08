const fs = require("node:fs")

// sync
// fs.writeFileSync('./test.txt', "Hello") 

// async
// fs.writeFile('./test.txt', 'this is async', function(err){
//     console.log("err", Boolean(+err))
// })


// sync - blocking code
// const result = fs.readFileSync('./data.txt', 'utf-8')
// console.log(result.trim())

// async - non-blocking

// fs.readFile('./data.txt', 'utf-8', function(err, data){
//     if(!err){
//         console.log("data\n", data)
//     }
//     else{
//         console.log(`Error: ${err}`)
//     }
// })


// fs.appendFileSync('./test.txt', `${new Date().toLocaleDateString()}\n`)

// fs.unlinkSync("./test.txt")

// fs.mkdirSync("pro/coder/hoon", {recursive: true})
// fs.rmdirSync("pro" , {recursive: true})


