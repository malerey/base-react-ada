import React, { Component } from 'react';
import './noteslist.css'

class NotesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="notes-list">
        {this.props.list.map(n => <div className="note">{n}</div>)}
      </div>

    )
  }
}

export default NotesList 