import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import ButtonAppBar from '../navBar';
import CatCard from '../catCard';
import Background from '../animal-cat-cute-37337.jpg';

const styles = theme => ({
    root: {
        backgroundImage: `url(${Background})`,
        height: "1080px",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
});

class Index extends React.Component {
    state = {
        open: false,
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <ButtonAppBar/>
                <CatCard/>
            </div>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
