// Delete all notes from local storage
function deleteAllNotes() {
    alert("All notes have been deleted! Click 'Back' to create new notes." )
    localStorage.clear()
    location.reload()
}


// Clear note form after submission
function clearForm() {
    document.getElementById("note").value=""
}

// Get notes that exist in localStorage currently
function getExistingNotes() {
    let notes = localStorage.getItem('notes')
    if (!notes) {
        return null
    }
    return JSON.parse(notes)
}


// Sets the ID for each note in the note array
function retrieveNoteId() {
    let noteObject = getExistingNotes()
    if (!noteObject) {
        return 1
    }

    const keysArray = Object.keys(noteObject)
    const numberKeys = keysArray.map((key) => Number(key))
    console.log(numberKeys)
    return numberKeys.length + 1
}


// Displays message on the notes page telling user there are no notes
function noNotesMessage() {
    const message = document.createElement('h3')
    message.innerHTML = "No notes to display! Click the 'Back' button to add new notes."
    document.body.append(message)
}