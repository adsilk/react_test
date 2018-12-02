import React from 'react';

import Editable from './Editable';
import Note from './Note'
export default ({notes,onDelete=() => {console.log("notes",notes)},onEdit=() => {},onNoteClick=() => {}}) => (
  <ul>{notes.map(({id,editing,task}) =>(<li key={id}>
      <Note onClick={onNoteClick.bind(null,id)}>
        <Editable 
          editing={editing}
          value={task}
          onEdit={onEdit.bind(null,id)}/>
        <button onDelete={onDelete.bind(null,id)}>X</button>
      </Note>
    </li>)
  )}</ul>
)