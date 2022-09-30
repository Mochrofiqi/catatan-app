import React from "react";

class BuatCatatan extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      judul: "", body: "",
      limitJudul: { inputJudul: "", limit: 50, char: 50 },
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length < 51) {
      this.setState((prevState) => {
        return {
          judul: event.target.value,
          limitJudul: {
            ...prevState.limitJudul,
            inputJudul: event.target.value,
            char: prevState.limitJudul.limit - event.target.value.length,
          },
        };
      });
    }
  }
  
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.buatCatatan(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h1>Tambah Catatan</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <h6 className={`note-input__title__char-limit ${ this.state.limitJudul.char === 0 ? "null" : "" }`}> Sisa Karakter : {this.state.limitJudul.char}</h6>
          <input className="note-input__title" type="text" value={this.state.judul} onChange={this.onTitleChangeEventHandler}
            placeholder="Judul.." required />
          <textarea className="note-input__body" type="text" value={this.state.body} onChange={this.onBodyChangeEventHandler}
            placeholder="Ketik Catatan Disini.." required />
          <button type="submit">Buat Catatan</button>
        </form>
      </div>
    );
  }
}
    
export default BuatCatatan;
    