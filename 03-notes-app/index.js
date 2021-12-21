const yargs = require("yargs");
const { createNote } = require("./utils/notes");

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
        console.log("Remove command works", argv)
    }
})


yargs.parse();


// > node index.js add --title="..." --body="..."
// > node index.js read --title="..."
// > node index.js remove --title="..."
// > node index.js list