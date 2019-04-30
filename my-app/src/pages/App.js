import React, {Component} from 'react'
import ButtonAppBar from '../components/navBar'
import Main from './Main'
import Background from "../pictures/animal-cat-cute-37337.jpg";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import "../common/app.scss";
import {BrowserRouter} from "react-router-dom";

const styles = theme => ({
    root: {
        backgroundImage: `url(${Background})`,
        position: 'relative',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
    },
    content: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1400px',
        width: '90%',
        color: 'white',
        textAlign: 'center',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
});

class App extends Component {
    render() {
        const {classes} = this.props;
        return (
            <BrowserRouter>
                <div className={ classes.root }>
                    <ButtonAppBar className={ classes.content }/>
                    <br/>
                    <div className={ classes.content }>
                        <Main/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);