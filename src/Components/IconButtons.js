import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

export const AddButton = ({ onClick }) => (
    <Fab
        color='primary'
        onClick={onClick}
        size='medium'>
        <AddIcon />
    </Fab>
)

export const DeleteButton = ({ onClick }) => (
    <Fab
        color="secondary"
        size='small'
        onClick={onClick}>
        <DeleteIcon />
    </Fab>
)