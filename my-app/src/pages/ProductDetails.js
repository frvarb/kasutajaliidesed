import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { View } from 'react-native';
import { connect } from 'react-redux';
import "../common/company.scss";
import Button from "@material-ui/core/Button";
import {addToCart} from "../components/actions/cartActions";
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import {Link} from "react-router-dom";

const styles = theme => ({
    topView: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
});


class ProductDetails extends React.Component {
    handleClick = (id)=>{
        this.props.addToCart(id);
    }
    render(){
        const {classes} = this.props;
        console.log(this.props.match.params.id);
        console.log(this.props.items);
        const product = this.props.items.find(item => item.id === Number(this.props.match.params.id));
        console.log(product);
        return (
            <View className="layout">
                <img alt="" className="picture" src={product.img}/>
                <div>
                    <View className={classes.topView}>
                        <div>
                            <h1>{product.title}</h1>
                        </div>
                        <div>
                            <h1 style={{paddingLeft: '30%'}}>{product.price}€</h1>
                        </div>
                    </View>
                    <p style={{width: '90%'}}>{product.smallDesc}</p>
                    <Button style={{backgroundColor: 'white', width: '90%', height: '10%'}} aria-label="Add to cart"
                            onClick={()=>{this.handleClick(Number(product.id))}}>
                        Add to Cart
                        <AddShoppingCart className={classes.marginLeft}/>
                    </Button>
                    <Button style={{backgroundColor: 'white', width: '90%', height: '10%', marginTop: '5%'}} aria-label="Back"
                            component={Link} to="/~frvarb/kasutajaliidesed/prax2/">
                        Back
                    </Button>
                </div>
            </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
};

ProductDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps,mapDispatchToProps) (withStyles(styles)(ProductDetails));