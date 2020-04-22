import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { DeleteButton } from '../IconButtons';
import React from 'react';

import { formatCost } from '../../utils';

export const ExpenseTable = ({ expenses, selectedExpenses, toggleSelection, deleteExpense }) => {
    const classes = useStyles();
    return (
        <Table className={classes.root}>
            <TableHead>
                <TableRow>
                    <TableCell>Expense Name</TableCell>
                    <TableCell align='right'>Cost</TableCell>
                    <TableCell align='right'>Category</TableCell>
                    <TableCell align='right'>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {expenses.map(expense =>
                    <Expense
                        expense={expense}
                        deleteExpense={deleteExpense}
                    />)}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell align='right'>{formatCost(getTotalCost(expenses))}</TableCell>
                    <TableCell align='right'></TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}

const Expense = ({ expense, deleteExpense }) => (
    <TableRow
        key={expense.id}
        hover
    >
        <TableCell>{expense.name}</TableCell>
        <TableCell align='right'>{formatCost(expense.cost)}</TableCell>
        <TableCell align='right'>{expense.category}</TableCell>
        <TableCell align='right'>
            <DeleteButton onClick={() => deleteExpense(expense)} />
        </TableCell>
    </TableRow>
)

const getTotalCost = expenses => expenses.reduce(
    (total, expense) => total + parseFloat(expense.cost),
    0
)

const useStyles = makeStyles(theme => ({
    root: {
        '& th, .MuiTableCell-footer': {
            fontWeight: 600,
            'font-size': '1rem',
            color: 'rgba(0, 0, 0, 0.87)',
            overflow: 'auto',
            maxHeight: '500'
        }
    }
}))