import React from "react";
import InputCatatan from "./InputCatatan";
import ButtonCatatan from "./ButtonCatatan";

function ItemCatatan({ id, judul, createdAt, body, onArchive, onDelete, catatan }) {
  return (
    <div className="note-item">
      <InputCatatan judul={judul} createdAt={createdAt} body={body} catatan={catatan} />
      <ButtonCatatan onDelete={onDelete} id={id} onArchive={onArchive} catatan={catatan} />
    </div>
  );
}

export default ItemCatatan;