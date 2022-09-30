import React from "react";
import { getInitialData } from "../utils/data";

function ButtonHapus({ onDelete, id, catatan }) {
  return (
    <button className="note-item__delete-button" onClick={() => onDelete(id)}>Hapus</button>
  );
}
function ButtonArsip({ onArchive, id, catatan }) {
  const arsip = getInitialData.archived === true;

  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}> {!arsip ? "Arsip" : "Aktif"}</button>
  );
}

function ButtonCatatan({ onDelete, onArchive, id, catatan }) {
  return (
    <div className="note-item__action">
      <ButtonHapus onDelete={onDelete} id={id} catatan={catatan} />
      <ButtonArsip onArchive={onArchive} id={id} catatan={catatan} />
    </div>
  );
}

export default ButtonCatatan;