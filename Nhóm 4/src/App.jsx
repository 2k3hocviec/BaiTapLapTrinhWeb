import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Học useState để quản lý state trong component",
      date: "17/04/2026, 20:00",
      icon: "📚",
    },
    {
      id: 2,
      title: "Tìm hiểu useEffect và lý side effects",
      date: "17/04/2026, 20:05",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Thực hành Context API chia sẻ dữ liệu",
      date: "17/04/2026, 20:10",
      icon: "📎",
    },
    {
      id: 4,
      title: "Thêm chức năng Dark / Light mode",
      date: "17/04/2026, 20:15",
      icon: "🌙",
    },
    {
      id: 5,
      title: "Lưu dữ liệu vào localStorage bằng useEffect",
      date: "17/04/2026, 20:20",
      icon: "💾",
    },
  ]);

  const [isDark, setIsDark] = useState(false);

  const addNote = (title) => {
    if (title.trim()) {
      const newNote = {
        id: Date.now(),
        title,
        date: new Date().toLocaleString("vi-VN"),
        icon: "✓",
      };
      setNotes([newNote, ...notes]);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header isDark={isDark} setIsDark={setIsDark} notes={notes} />
      <main className="container">
        <NoteForm onAddNote={addNote} />
        <NoteList notes={notes} onDeleteNote={deleteNote} />
      </main>
    </div>
  );
}

export default App;
