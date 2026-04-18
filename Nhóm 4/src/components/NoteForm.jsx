import { useState } from 'react';

export default function NoteForm({ onAddNote }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    onAddNote(input);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="note-form">
      <input
        type="text"
        placeholder="Nhập ghi chú mới..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="btn-add" onClick={handleAdd}>+ Thêm</button>
    </div>
  );
}