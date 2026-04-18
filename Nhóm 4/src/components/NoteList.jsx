export default function NoteList({ notes, onDeleteNote }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          <div className="note-content">
            <span className="note-icon">{note.icon}</span>
            <div className="note-text">
              <p className="note-title">{note.title}</p>
              <small className="note-date">{note.date}</small>
            </div>
          </div>
          <button className="btn-delete" onClick={() => onDeleteNote(note.id)}>
            Xóa
          </button>
        </div>
      ))}
    </div>
  );
}
