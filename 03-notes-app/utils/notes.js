const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const bufferData = fs.readFileSync("./notes.json");
    const stringData = bufferData.toString();
    return JSON.parse(stringData);
  } catch (err) {
    return [];
  }
};

const saveNote = (notes) => {
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
  console.log(chalk.green("Note Saved"));
};

const createNote = (title, body) => {
  const notes = loadNotes();
  const noteFound = notes.find((n) => n.title === title);
  if (noteFound) {
    console.log(chalk.red("Note title already exist. Try Again!"));
  } else {
    let note = { title, body };
    notes.push(note);
    saveNote(notes);
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteFound = notes.find(n => n.title === title)
  if(noteFound){
    console.log(chalk.grey("***********"))
    console.log(chalk.blue("Title : ", noteFound.title))
    console.log(chalk.blue("Body : ", noteFound.body))
  }else{
      console.log(chalk.red("Note title does not exist."))
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const noteFound = notes.find(n => n.title === title)
  if(noteFound){
    const duplicateNotes = notes.filter(n => n.title !== title)
    saveNote(duplicateNotes);
  }else{
      console.log(chalk.red("Title not found."))
  }
  
};

const listNote = () => {
  const notes = loadNotes()
  console.log(chalk.grey("***********"))
  notes.forEach(note => {
      console.log(chalk.blue("Title :", note.title))
      console.log(chalk.blue("Body :", note.body))
      console.log(chalk.grey("_____________________"))
  })
};

module.exports = {
  createNote, removeNote, readNote, listNote
};
