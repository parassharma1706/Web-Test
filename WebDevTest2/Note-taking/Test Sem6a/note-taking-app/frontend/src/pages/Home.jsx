import { useEffect, useState } from "react";
import { getNotes, createNote, deleteNote } from "../services/api";
import NoteCard from "../components/NoteCard";
import Navbar from "../components/Navbar";

export default function Home() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");
    const userId = "USER_ID"; // Replace with actual user ID from login response

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const res = await getNotes(userId);
            setNotes(res.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    const addNote = async () => {
        if (!newNote) return;
        try {
            await createNote({ userId, title: newNote, content: newNote, isAudio: false });
            setNewNote("");
            fetchNotes();
        } catch (error) {
            console.error("Error creating note:", error);
        }
    };

    const handleDelete = async (noteId) => {
        try {
            await deleteNote(noteId);
            fetchNotes();
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    return (
        <div className="p-5">
            <Navbar />
            <h1 className="text-2xl font-bold">Your Notes</h1>
            <input className="border p-2 w-full my-2" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
            <button onClick={addNote} className="bg-blue-500 text-white p-2">Add Note</button>
            <div className="mt-5 grid grid-cols-3 gap-4">
                {notes.map(note => (
                    <NoteCard key={note._id} note={note} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
}
