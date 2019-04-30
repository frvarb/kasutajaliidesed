import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';
import {Link} from 'react-router-dom';

const styles = theme => ({
    card: {
        backgroundColor: 'white',
        color: 'black',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    marginLeft: {
        marginLeft: "10px",
    },
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor: 'black',
    },
    removeMargin: {
        margin: 0,
    },
    buyButton: {
        flexGrow: 1,
    },
});

class CatCard extends React.Component {

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <Link to={"/~frvarb/kasutajaliidesed/prax2/Details/" + this.props.id}>
                    <CardMedia
                        className={classes.media}
                        image={ this.props.image }
                    />
                    <CardHeader title={ this.props.title } />
                    <CardContent>
                        <Typography component="p">
                            { this.props.smallDesc }
                        </Typography>
                    </CardContent>
                </Link>
                <CardActions className={classes.actions} disableActionSpacing>
                    <h1 className={classes.removeMargin}>
                        { this.props.price } €
                    </h1>
                    <Button className={classes.buyButton} aria-label="Add to cart"
                        onClick={()=>{this.handleClick(this.props.id)}}>
                        Add to Cart
                        <AddShoppingCart className={classes.marginLeft}/>
                    </Button>
                </CardActions>
            </Card>

        );
    }
}

CatCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
};

const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(CatCard));