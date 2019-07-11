import React, { Component } from 'react';
import './single-note.css'

class SingleNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  removeNote = () => {
    this.props.removeNote(this.props.id)
  }

  render() {
    return (
      <div className="note">
        <div className="note-remove"
              onClick={this.removeNote}>
                X
          </div>
        {this.props.data}
      </div>

    )
  }
}

export default SingleNote 