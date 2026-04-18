import ThemeToggle from "../context/ThemeContext";

export default function Header({ isDark, setIsDark, notes }) {
  return (
    <>
      <header className="header">
        <h1>📝 Ghi Chú Cá Nhân</h1>
        <div className="header-controls">
          <span className="note-count">{notes?.length || 0} ghi chú</span>
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        </div>
      </header>
    </>
  );
}
