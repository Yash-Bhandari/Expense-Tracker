import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { DeleteButton } from '../IconButtons';
import React, { useState } from 'react';

import { formatCost } from '../../utils';

export const ExpenseTable = ({ expenses, deleteExpense }) => {
    const classes = useStyles();
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(SortOrder.ASCENDING);
    const sortedExpenses = sortExpensesBy(expenses, sortKey, sortOrder);

    const toggleSortOrder = () => setSortOrder((sortOrder + 1) % 2);

    const handleHeaderClick = headerName => e => {
        if (sortKey === headerName) {
            if (sortOrder === SortOrder.DESCENDING)
                setSortKey(null);
            toggleSortOrder();
        }
        else
            setSortKey(headerName);
    }
    return (
        <Table className={classes.root}>
            <TableHead>
                <TableRow>
                    <TableCell
                        onClick={handleHeaderClick('name')}
                        hover>
                        Expense Name
                    </TableCell>
                    <TableCell
                        align='right'
                        onClick={handleHeaderClick('cost')}
                        hover>
                        Cost
                    </TableCell>
                    <TableCell
                        align='right'
                        onClick={handleHeaderClick('category')}
                        hover>
                        Category
                    </TableCell>
                    <TableCell align='right'>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {sortedExpenses.map(expense =>
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

const sortExpensesBy = (expenses, key, order) => {
    if (key === null)
        return expenses;

    const stringCompare = (str1, str2) =>
        str1 <= str2 ? -1 : 1

    const compareFunction = (expense1, expense2) => {
        const result = key === ExpenseKeys.COST
            ? expense1[key] - expense2[key]
            : stringCompare(expense1[key], expense2[key]);

        return order === SortOrder.ASCENDING
            ? result
            : result * -1;
    }
    const sortedExpenses = expenses.slice();
    sortedExpenses.sort(compareFunction);
    console.log(sortedExpenses)
    return sortedExpenses;
}

// enum
const ExpenseKeys = {
    COST: 'cost',
    NAME: 'name',
    CATEGORY: 'category'
}

// enum
const SortOrder = {
    ASCENDING: 0,
    DESCENDING: 1
}

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