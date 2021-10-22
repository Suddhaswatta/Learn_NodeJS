
const { demandOption, argv ,command,parse} = require("yargs")
const db = require('./note-fs.js')
const yargs = require('yargs')

command({
    command:"get",
    describe:"get a note",
    handler:(note)=>{
        console.log(`Add a new note ${node}`);
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
    handler:function(){
        let note = {title:"",body:""}
        note.title = argv.title
        note.body = argv.body
        db.create(note)
    }
})
command({
    command:"remove",
    describe:"Remove a note",
    handler:function(){
        console.log("Hello");
    }
})
command({
    command:"list",
    describe:"get all notes",
    handler: function(){
        console.log("Get all notes");
    }
})
command({
    command:"clear",
    describe:"remove all notes",
    handler:function(){
        console.log("remove all notes");
    }
})

yargs.parse()
