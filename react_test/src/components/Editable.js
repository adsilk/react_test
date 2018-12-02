import React from 'react';

export default ({editing, value, onEdit, ...props}) => {
  console.log("editing",editing);
  if(editing) {
    return <Edit value={value} onEdit={onEdit} {...props}/>;
  }
  return <div {...props}>value:{value}</div>;
}

const Edit = ({onEdit = () => {}, value, ...props}) => (
  <div onClick={onEdit} {...props}>
    <span>edit:{value}</span>
  </div>
);