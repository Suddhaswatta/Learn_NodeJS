
const {info,err, ok} = require("./logging")
const fs = require('fs')

const filename = "notes.json"


const create = (note)=>{
    let notes = readAll()
    const got = read(note.title)
    if(got!==undefined && got.length !=0 )
        err(`Note with title : ${note.title} already exists.`)
    else{
        notes.push(note)
        write(notes)
    }    
}

const clear = ()=>{
    fs.unlink(filename,(e)=>{
        if(e){
            err(`There are no data to be deleted ....... :(`)
        }else{
            ok(`All data are removed :)`)
        }
    })
}
const write = (data)=>{
    const strData = JSON.stringify(data,null,4)
    fs.writeFileSync(filename,strData)
    info(`Current data : \n${strData}\n`)
    return data
}

const update = (note)=>{
    remove(note.title)
    create(note)
}

const remove = (title)=>{
    const found = read(title)
    if(found.length !==0 ){
        err(`Data to be deleted :: ${JSON.stringify(found)}`)
    }else{
        err(`No data found to be deleted .`)
    }
    const notes = readAll().filter((note)=>note.title !== title)
    write(notes)
}

const read = (title)=>{
    return readAll().filter((note)=>note.title === title)
}

const readAll = ()=>{
    try{
        const buffer = fs.readFileSync(filename).toString()
        return JSON.parse(buffer)
    }catch(e){
        return []
    }
}

module.exports = {
  create : create,
  update : update,

  remove : remove,
  read : read,
  readAll : readAll,
  clear : clear
}

