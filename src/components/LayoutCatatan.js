import React from "react";
import CatatanKosong from "./CatatanKosong";
import ListCatatan from "./ListCatatan";

function LayoutCatatan({ judulCatatan, catatans, kata, onDelete, onArchive }) {
  
  return (
    <div>
      <h2>{judulCatatan}</h2>
      {catatans.length !== 0 ? (
        <ListCatatan catatans={catatans} onDelete={onDelete} onArchive={onArchive} kata={kata} />
      ) : (
        <CatatanKosong />
      )}
    </div>
  );
}

export default LayoutCatatan;