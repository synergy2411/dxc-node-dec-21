const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
    try{
        const bufferData = fs.readFileSync("./notes.json")
        const stringData = bufferData.toString();
        return JSON.parse(stringData)
    }catch(err){
        return [];
    }
}

const saveNote = (notes) => {
    fs.writeFileSync("./notes.json", JSON.stringify(notes))
    console.log(chalk.green("Note Saved"))
}

const createNote = (title, body) => {
    const notes = loadNotes()
    let note = { title, body };
    notes.push(note)
    saveNote(notes)
}



module.exports = {
    createNote 
}