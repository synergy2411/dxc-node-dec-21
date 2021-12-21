const yargs = require("yargs");

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
        console.log("Add Command works", argv)
    }
})

yargs.parse();


// > node index.js add --title="..." --body="..."
// > node index.js read --title="..."
// > node index.js remove --title="..."
// > node index.js list