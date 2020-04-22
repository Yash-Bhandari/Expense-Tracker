import React, { useState } from 'react';

import { AddButton } from '../IconButtons';
import { AddExpenseDialog } from './AddExpenseDialog';

export const AddExpense = ({ addExpense }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <AddButton onClick={handleOpen} />
            <AddExpenseDialog
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
                addExpense={addExpense}
            />
        </>
    )
}

