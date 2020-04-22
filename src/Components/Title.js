import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const Title = ({ title }) => {
    const classes = useStyles();
    return (
        <Typography
            variant='h2'
            align='center'
            gutterBottom
            className={classes.root}>
            {title}
        </Typography>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(5)
    }
}))

export default Title;