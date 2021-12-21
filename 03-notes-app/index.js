const yargs = require("yargs");
const { createNote, removeNote, readNote, listNote } = require("./utils/notes");

yargs.command({
    command : "add",
    description : "to add new note",
    builder : {
        title : {
            type : "string",
            demandOption : true
        },
        body:  {
            type : "string",
            demandOption : true
        }
    },
    handler : (argv) => {
        let  {title, body} = argv;
        createNote(title, body)
    }
})

yargs.command({
    command : "remove",
    description  : "to remove on note",
    builder : {
        title : {
            type : "string",
            demandOption : true
        }
    },
    handler : (argv) => {
        removeNote(argv.title)
    }
})

yargs.command({
    command : "read",
    description : "to read one note",
    builder : {
        title :{
            type : "string",
            demandOption : true
        }
    },
    handler : args => {
        readNote(args.title)
    }
})

yargs.command({
    command : "list",
    description : "to list down all notes",
    handler : () => {
     listNote()   
    }
})

yargs.parse();


// > node index.js add --title="..." --body="..."
// > node index.js read --title="..."
// > node index.js remove --title="..."
// > node index.js list