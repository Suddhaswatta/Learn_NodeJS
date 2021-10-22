const fs  = require("fs")
const chalk  = require("chalk")
const red = chalk.bold.redBright
const green = chalk.bold.greenBright
const blue = chalk.bold.blue

const success = (message)=>{
    console.log(green(message))
}

const error = (message)=>{
    console.log(red(message))
}

const info = (message)=>{
    console.log(blue(message))
}


module.exports = {
    err : error,
    ok : success,
    info : info
}