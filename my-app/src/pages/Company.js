import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { View } from 'react-native';
import "../common/company.scss";

const styles = theme => ({
});


function Company() {
    return (
        <View className="layout">
            <img alt="" className="picture" src={ require('../pictures/140909-F-PJ289-098.JPG') } />
            <div className="noMargin">
                <h2>History</h2>
                <p>The company has been established since 2010. Originally we only had 2 employees in
                 our e-commerce business. In 2012 we opened our  first shop in Tartu, Estonia (in the picture).
                </p>
                <h2>Present Day</h2>
                <p>Since 2012 we have opened more stores in several locations in and outside of Estonia.
                    We now have more than 600 employees. Our workplace is comfortable and we try to have a few cats
                     hanging out at our stores, so that employees and customers feel less stressful.
                </p>
                <h2>Future</h2>
                <p>We hope to expand even more in the upcoming years and we are in a constant search for more
                    employees. If you feel like working around cats could interest you, email us at
                    catstopshop@info.ee.
                </p>
            </div>
        </View>
    );
}

Company.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Company);
