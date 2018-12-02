import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';


export default class NoteManager extends React.Component{
    
    constructor(){
        super();
        this.state = {notes:[
        {
          id: uuid.v4(),
          task: 'Learn React',
          editing: false
        },
        {
          id: uuid.v4(),
          task: 'Do laundry',
          editing: false
        },
        {
          id: uuid.v4(),
          task: 'talk with gf',
          editing: false
        },
        {
          id: uuid.v4(),
          task: 'hard work',
          editing: false
        }
      ]}

      this.addNote = this.addNote.bind(this);
      this.deleteNote = this.deleteNote.bind(this);
      this.activateNoteEdit = this.activateNoteEdit.bind(this);
      this.editNote = this.editNote.bind(this);
    }

    
    render(){
        return(
            <div>
                <button onClick={this.addNote}>+</button>
                <Notes notes={this.state.notes} onDelete={this.deleteNote} onEdit={this.editNote} onNoteClick={this.activateNoteEdit}/>
            </div>
        )
    }

    addNote(){
        this.setState({
            notes:this.state.notes.concat([{
                id:uuid.v4(),
                task:"new task",
                editing:false
            }])})}
    
    deleteNote(id){ 
        this.setState({
            notes:this.state.notes.filter(note => note.id !== id)
        })
    }

    activateNoteEdit(id){
        this.setState({
            notes: this.state.notes.map(note => {
                if(note.id === id) {
                  note.editing = true;
                }
            return note;
        })
    })}

    editNote(id,task){
        this.setState({
            notes: this.state.notes.map(note => {
                if(note.id = id){
                    note.editing = false;
                    note.task = task;
                }
                return note;
            })
        })
    }
}