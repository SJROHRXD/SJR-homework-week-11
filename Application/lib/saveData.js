// REQUIRE / DEPENDENCIES 🍌 //
const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);

class Save {
    write(note) {
        // write method is passed note, note is written to json db
        return writeNote("db/db.json", JSON.stringify(note));
    }

    read() {
        // read method returns a note from json db
        return readNote("db/db.json", "utf8");
    }
    async getNotes() {
        // await read method, then get and add to parsedNotes array
        const notes = await this.read();
        let parsedNotes;
        try {
            parsedNotes = [].concat(JSON.parse(notes));
        } catch (err) {
            parsedNotes = [];
        }
        return parsedNotes;
    }
    async postNote (note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error("Not Title nor Text can be Blanketh.");
        }
        const newNote = { title, text, id: uuidv4() };
        // this might not exactly be needed
        // don't allow note to be posted if title or text is blank

        const notes = await this.getNotes();
        const updatedNotes = [...notes, newNote];
        await this.write(updatedNotes);
        return newNote;
        // manages notes when they're updated
    }
    async deleteNote(id) {
        const notes = await this.getNotes();
        const filteredNotes = notes.filter(note => note.id !== id);
        return await this.write(filteredNotes);
        // deletes a note by the note's id!
    }
};

module.exports = new Save();
// omg did my async / await class thing work?