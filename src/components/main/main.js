import React, { Component } from 'react';
import './main.css'
import NotesList from '../noteslist/noteslist'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }

  handleChange = e => {
    this.setState({
      newNote: e.target.value
    })
  }

  handleClick = () => {
    const notes = [...this.state.notes]
    notes.push(this.state.newNote)
    this.setState({
      notes: notes,
      newNote: ''
    })
  }

  removeNote = id => {
    var filtered = this.state.notes.filter((e, i, a) => i != id) 
    this.setState({
      notes: filtered
    })
  
  }

  render() {
    return (
      <div className="notes-app">
        <h1>Mis notas</h1>
        <div className="notes-editor">
          <textarea
            value={this.state.newNote}
            onChange={e => this.handleChange(e)}
            rows="4"
            cols="50">
          </textarea>
          <button
            onClick={this.handleClick}>
            Agregar nota
          </button>
        </div>

        {this.state.notes.length ?  
        <NotesList
        removeNote={this.removeNote}
        list={this.state.notes}/>
        : ''
        }
      </div>

    )
  }
}

export default Main 