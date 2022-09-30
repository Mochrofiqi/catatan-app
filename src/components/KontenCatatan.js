import React from "react";
import LayoutCatatan from "./LayoutCatatan";

function KontenCatatan({ catatans, arsipCatatan, kata, onDelete, onArchive, buatCatatan }) {

  return (
    <div className="note-app__body">
      <LayoutCatatan judulCatatan="Catatan Aktif" catatans={catatans} onDelete={onDelete} onArchive={onArchive} kata={kata} />
      <LayoutCatatan judulCatatan="Catatan Arsip" catatans={arsipCatatan} onDelete={onDelete} onArchive={onArchive} kata={kata}/>
    </div>
  );
}

export default KontenCatatan;