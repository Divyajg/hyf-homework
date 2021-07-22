const notes = [];

function saveNote(content, id, personal) {
    // write some code here
    let obj = {
        "content": content,
        "id": id,
        "personal": personal,
    }
    notes.push(obj);
}
saveNote("Pick up groceries", 1, true);
saveNote("Do laundry", 2, true);
saveNote("Finish the homework", 3, false);

console.log(notes);

//------------------------------------------------------------------------------------------

function getNote(id) {
    // your code here
    let result;
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            result = notes[i];
            break;
        } else if ((id.typeof !== "number") || (id == " ") || (notes[i].id !== id)) {
            result = "Not a valid data or type";
        }
    }
    return result;
}


console.log(getNote(3));
console.log(getNote(5));
console.log(getNote(" "));
console.log(getNote("ght"));


//-------------------------------------------------------------------------------------------------

function logOutNotesFormatted() {
    // your code here

    for (let i = 0; i < notes.length; i++) {
        console.log("The note with id: " + notes[i].id + ", has the following note text: " + notes[i].content);
    }
}

logOutNotesFormatted();

//-------------------------------------------------------------------------------------------------

function classifyNotes() {
    let personalNotes = [];
    let ProfessionalNotes = [];

    for (let j = 0; j < notes.length; j++) {
        if (notes[j].personal === true) {
            personalNotes.push(notes[j]);
        } else {
            ProfessionalNotes.push(notes[j]);
        }
    }
    console.log("Below are personal notes  ");
    console.log(personalNotes);
    console.log("Below are professional notes  ");
    console.log(ProfessionalNotes);
}

classifyNotes();