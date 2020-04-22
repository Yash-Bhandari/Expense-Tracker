import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useRef, useState } from 'react';

export const AddExpenseDialog = ({ open, handleClose, addExpense }) => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState(0);
    const [category, setCategory] = useState('');
    const nameInput = useRef(null);

    const handleSubmit = () => {
        addExpense({ name, cost, category });
        setName('');
        setCost(0);
        setCategory('');
        nameInput.current.focus();
    }

    const handleKeyPress = e => {
        const code = e.keyCode || e.which;
        if (code === 13) // enter key code
            handleSubmit();
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New Expenses</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    label='Name'
                    inputRef={nameInput}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    fullWidth
                />
                <TextField
                    type='number'
                    label='Cost'
                    margin='normal'
                    value={cost}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    onChange={e => setCost(e.target.value)}
                />
                <Autocomplete
                    options={expenseCategories}
                    style={{ width: 300 }}
                    onChange={(e, newVal) => setCategory(newVal)}
                    value={category}
                    onKeyPress={handleKeyPress}
                    freeSolo
                    renderInput={(params) => <TextField {...params} label="Category" variant="outlined" />}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleSubmit}
                    color='secondary'
                    variant='contained'>
                    Add
            </Button>
                <Button onClick={handleClose}>
                    Finish
            </Button>
            </DialogActions>
        </Dialog>
    )
}

const expenseCategories = [
    'Shopping',
    'Pets',
    'Groceries',
    'Eating Out',
    'Bills',
    'Childcare',
    'Housing',
    'Essentials',
    'Clothing',
    'Gas'
]