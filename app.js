
const { demandOption, argv ,command,parse} = require("yargs")

const {clear,create,readAll, read, remove} = require('./note-fs.js')
const yargs = require('yargs')
const {ok, err,} = require('./logging.js')


command({
    command:"get",
    describe:"get a note",

    builder:{
        title:{
            describe: "Note title",
            demandOption: true,
            type:'string'
        }
    },
    handler(){
        ok(`Fetched Note : ${JSON.stringify(read(argv.title.trim()))}`)
    }
})
command({
    command:"add",
    describe:"add a note",
    builder:{
        title:{
            describe: "Note title",
            demandOption: true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:'string'
        }
    },

    handler(){
        let note = {title:"",body:""}
        note.title = argv.title.trim()
        note.body = argv.body.trim()
        create(note)
    }
})
command({
    command:"remove",
    describe:"Remove a note",

    builder:{
        title:{
            describe: "Note title",
            demandOption: true,
            type:'string'
        }
    },
    handler(){
        remove(argv.title.trim())
    }
})
command({
    command:"list",
    describe:"get all notes",

    handler(){
        const notes = readAll()
        if(notes){
            ok(`Fetched all data :\n${JSON.stringify(notes,null,4)}`)
        }else{
            ok(`There are no data as of now ....`)
        }
    }
})
command({
    command:"clear",
    describe:"remove all notes",

    handler(){
        clear()

    }
})

yargs.parse()
