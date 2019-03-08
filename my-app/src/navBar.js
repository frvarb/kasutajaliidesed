import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import logo from './image.png';

const styles = {
    root: {
        flexGrow: 1,
        backgroundColor: 'transparent',
        tintColor: '#ffffff',
    },
    grow: {
        flexGrow: 1,
        color: 'white',
    },
    menuButton: {
        flex: '10',
        color: 'white',
        height: "100px",
    },
    mainBar: {
        flex: 1,
        background: 'transparent',
        boxShadow: 'none',
    },
    button: {
        fontSize: '20px',
        flex: '20',
        height: '100px',
        color: 'white',
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.mainBar}>
                <Toolbar>
                    <img src={logo} className="App-logo" alt="logo" />
                    <Button className={classes.button}>Tooted</Button>
                    <Button className={classes.button}>Firmast</Button>
                    <Button className={classes.button}>FAQ</Button>
                    <Button className={classes.button}>Policy</Button>
                    <Button className={classes.menuButton} aria-label="ShoppingCart">
                        <ShoppingCart />
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);