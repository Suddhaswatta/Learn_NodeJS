const chalk = require("chalk")
const error = chalk.bold.redBright
const success = chalk.bold.greenBright
const info = chalk.bold.blue

const create = (note)=>{
    console.log(success(`Added note : ${JSON.stringify(note)}`));
}

const update = (note)=>{
    console.log(error(`UPDATED Note : ${JSON.stringify(note)}`));
}


const remove = (note)=>{
    console.log(error(`DELETED Note : ${JSON.stringify(note)}`));
}


const read = (note)=>{
    console.log(info(`FETCHED Note : ${JSON.stringify(note)}`));
}

const readAll = ()=>{
    console.log(info(`FETCHED Notes : `));
}

module.exports = {
  create : create,
  update : update,
  delete : remove,
  read : read,
  readAll : readAll
}

