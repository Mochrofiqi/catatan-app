import React from "react";
import { getInitialData } from "../utils/data";
import Header from "./Header";
import BuatCatatan from "./BuatCatatan";
import KontenCatatan from "./KontenCatatan";

class CatatanApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catatans: getInitialData(),
      kata: '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const catatans = this.state.catatans.filter((catatan) => catatan.id !== id);
    this.setState(() => ({ catatans: catatans }));
  }

  onArchiveHandler(id) {
    const catatans = this.state.catatans.filter((catatan) => catatan.id === id);
    const item = catatans[0];
    item.archived = !item.archived;
    this.setState(() => ({ item }));
  }

  onSearchHandler(event) {
    this.setState(() => ({
      kata: event.target.value,
    }));
  }

    onAddNoteHandler({ judul, body }) {
    this.setState((prevState) => {
      return {
        catatans: [
          ...prevState.catatans,
          {
            id: +new Date(),
            judul,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  render() {
    const catatans = this.state.catatans.filter((catatan) => catatan.archived === false);
    const arsipCatatan = this.state.catatans.filter((catatan) => catatan.archived === true);

    return (
      <div className="konten">
        <Header onSearch={this.onSearchHandler} kata={this.state.kata}  />
        <div className="note-app__body">
          <BuatCatatan buatCatatan={this.onAddNoteHandler} />
          <KontenCatatan catatans={catatans} arsipCatatan={arsipCatatan} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} kata={this.state.kata.toUpperCase()} />
        </div>
      </div>
    );
  }
}

export default CatatanApp;
        