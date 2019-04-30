import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
});

class ThankYou extends React.Component {

    render() {
        return (
            <div>
                <h1>
                    Thank you for buying our products!
                </h1>
            </div>
        );
    }
}

ThankYou.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThankYou);