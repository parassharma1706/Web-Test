export default function NoteCard({ note, onDelete }) {
    return (
        <div className="border p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold">{note.title}</h2>
            <p>{note.content}</p>
            <button className="bg-red-500 text-white px-3 py-1 mt-2" onClick={() => onDelete(note._id)}>
                Delete
            </button>
        </div>
    );
}
