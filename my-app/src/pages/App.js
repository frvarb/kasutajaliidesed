import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import withRoot from '../withRoot';
import ButtonAppBar from '../navBar';
import CatCard from '../catCard';
import Background from '../animal-cat-cute-37337.jpg';

const styles = theme => ({
    root: {
        backgroundImage: `url(${Background})`,
        height: '1080px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    margin: {
        flex: 1,
        width: "90em",
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    padding: {
        padding: theme.spacing.unit * 2,
    },
    container: {
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
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
                <div className={classes.margin}>
                    <Grid container>
                        <Grid item xs>
                            <CatCard/>
                            <br/>
                            <CatCard/>
                        </Grid>
                        <Grid item xs>
                            <CatCard/>
                            <br/>
                            <CatCard/>
                        </Grid>
                        <Grid item xs>
                            <CatCard/>
                            <br/>
                            <CatCard/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
