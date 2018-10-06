import React from 'react'
import { Button, TextField } from '@material-ui/core';

const AddItemButton = ({onAddClick, onTextChange, onTextKeyPress, text}) => (
    <div>
    <TextField label="What's on your mind?" value={text} onChange={onTextChange} onKeyPress={onTextKeyPress}></TextField>
    <Button variant="raised" color="primary" onClick={onAddClick}>
    Add item
   </Button>
   </div>
)

export default AddItemButton