import React from "react";

function Header({ kata, onSearch }) {
  
  return (
    <div className="note-app__header">
      <h1>Aplikasi Catatan</h1>
      <div className="note-search">
        <input type="text" placeholder="Kata Pencarian.." value={kata} onChange={onSearch} />
      </div>
    </div>
  );
};

export default Header;
