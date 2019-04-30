import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CatCard from '../components/catCard';
import { connect } from 'react-redux';
import '../common/app.scss';

const styles = theme => ({
    padding: {
        padding: theme.spacing.unit,
    },
    container: {
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
    },
});

function split(arr, n) {
    const res = [];
    let leftOver = arr.length % n;
    let spliceAmount = arr.length / n;
    while (arr.length) {
        if (leftOver === 2) {
            res.push(arr.splice(0, spliceAmount + 1));
            leftOver = 1;
        } else if (leftOver === 1){
            res.push(arr.splice(0, spliceAmount + 1));
            leftOver = 0;
        } else {
            res.push(arr.splice(0, spliceAmount));
        }
    }
    return res;
}

class Products extends Component {
    render() {
        const {classes} = this.props;
        const addedItems = this.props.items.map(data=>{
            return (
                <div key={data.id}>
                    <CatCard image={data.img} smallDesc={data.smallDesc} title={data.title} price={data.price} id={data.id}/>
                    <br/>
                </div>
            );
    });
        const separatedItems = split(addedItems, 3);
        return(
            <div>
                <Grid container>
                    <Grid item xs={12} sm={4} className={ classes.padding }>
                        {separatedItems[0]}
                    </Grid>
                    <Grid item xs={12} sm={4} className={ classes.padding }>
                        {separatedItems[1]}
                    </Grid>
                    <Grid item xs={12} sm={4} className={ classes.padding }>
                        {separatedItems[2]}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
}

Products.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Products));
