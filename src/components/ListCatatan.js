import React from "react";
import ItemCatatan from "./ItemCatatan";

function ListCatatan({ catatans, kata, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {catatans.filter((catatan) => catatan.judul.toUpperCase().includes(kata) === true)
        .map((catatan) => (
          <ItemCatatan key={catatan.id} id={catatan.id} onDelete={onDelete} onArchive={onArchive} {...catatan} />
        ))}
    </div>
  );
}

export default ListCatatan;