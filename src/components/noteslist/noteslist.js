import React, { Component } from 'react';
import './noteslist.css'
import SingleNote from '../single-note/single-note'

class NotesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="notes-list">
        {this.props.list.map((n,i) => 
        <SingleNote 
        data={n}
        id={i}
        removeNote={this.props.removeNote}
        />
        )}
      </div>

    )
  }
}

export default NotesList 