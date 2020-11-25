import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import Note from "../../components/notes.js";
import { mainAction } from "../../store/main/main.action.js";
import AddNote from "./presentation/addNote";
import Header from "./presentation/header";

class MainPage extends Component {
  state = { showNote: false };
  rootEl = createRef(null);

  componentDidMount() {
    const el = this.rootEl;
    if (el && el.current) {
      el.current.style.height =
        window.innerHeight - el.current.getBoundingClientRect().top + "px";
    }
  }

  addNote = ({ title, content }) => {
    const { notes } = this.props;
    console.log(notes, this.props);
    if (Array.isArray(notes)) {
      const newNote = notes.slice();
      newNote.unshift({ title, content, key: Date.now() });
      this.props.addNote(newNote);
    }
  };

  removeNote = (key) => {
    const { notes } = this.props;
    if (Array.isArray(notes)) {
      let newNote = notes.slice();
      newNote = newNote.filter((val) => val.key !== key);
      this.props.removeNote(newNote);
    }
  };

  toggleAddNote = () => {
    this.setState({ showNote: !this.state.showNote });
  };

  render() {
    const { notes } = this.props;
    return (
      <div className="animated fadeIn">
        <Header>G notes</Header>
        <div className="row d-flex " ref={this.rootEl}>
          <div className="col-sm-4 border overflow-auto">
            {notes.length ? (
              notes.map((val) => (
                <Note
                  heading={val.title}
                  content={val.content}
                  onClose={() => this.removeNote(val.key)}
                />
              ))
            ) : (
              <div className="d-flex justify-content-center align-items-center text-dark h-100">
                No notes available
              </div>
            )}
          </div>
          <div className="col-sm-8 p-4">
            <div className=" mt-2 form-group d-flex justify-content-end">
              <input
                type="submit"
                name="submit"
                className="btn btn-outline-secondary "
                onClick={this.toggleAddNote}
                value={!this.state.showNote ? "+ Add Note" : "Hide note"}
              />
            </div>
            {this.state.showNote ? (
              <AddNote handleSubmit={this.addNote} />
            ) : (
              <div className="d-flex justify-content-center align-items-center text-dark">
                Create Notes
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.main;
};

const mapDispatchToProps = {
  addNote: mainAction.addNote,
  removeNote: mainAction.removeNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
