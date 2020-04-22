import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

import AddExpense from '../AddExpense';
import { ExpenseTable } from './ExpenseTable';
import { costInCents } from '../../utils'

export const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);
    const [nextId, setNextId] = useState(1);

    const getNextId = () => {
        const id = nextId;
        setNextId(nextId + 1);
        return id;
    }

    // Cost is stored in cents to prevent floating point errors
    const addExpense = newExpense => setExpenses([...expenses, {
        ...newExpense,
        cost: costInCents(newExpense.cost),
        id: getNextId()
    }]);

    const deleteExpense = toDelete => {
        setExpenses(expenses.filter(expense => expense.id !== toDelete.id));
    }

    const classes = useStyles();
    return (
        <>
            <Paper>
                <ExpenseTable
                    expenses={expenses}
                    deleteExpense={deleteExpense} />
            </Paper>
            <div className={classes.actionBar}>
                <AddExpense addExpense={addExpense} />
            </div>
        </>
    )
}

const useStyles = makeStyles(theme => ({
    actionBar: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: theme.spacing(2)
    }
}))
