import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { View } from 'react-native';
import { connect } from 'react-redux';
import {addQuantity, removeItem, resetCart, subtractQuantity} from "../components/actions/cartActions";
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import AddCircle from '@material-ui/icons/AddCircle';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../common/shoppingCart.scss'
import logo from "../pictures/SEB.png";

const CustomTableCell = withStyles(theme => ({
    head: {
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        color: theme.palette.common.white,
    },
}))(TableCell);

const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    itemContainer: {
        width: '100%',
        color: 'white !important',
        flex: 1,
        margin: '5px',
        overflowX: 'auto',
    },
    responsive: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row: {
        color: 'white',
    }
});
class ShoppingCart extends React.Component {

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    };
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    };
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    };
    //reset shopping cart
    reset = ()=> {
        this.props.reset();
    };

    render() {
        const { classes } = this.props;
        let addedItems = this.props.addedItems.length ?
            (
                this.props.addedItems.map(item=>{
                    return(
                        <TableRow key={item.id}>
                            <CustomTableCell>{item.title}</CustomTableCell>
                            <CustomTableCell><b>{item.price}€</b></CustomTableCell>
                            <CustomTableCell align="center">
                                <b>{item.quantity}</b>
                            </CustomTableCell>
                            <CustomTableCell>
                                <Button style={{ color: 'white' }} component={Link} to="/~frvarb/kasutajaliidesed/prax2/ShoppingCart" onClick={()=>{this.handleAddQuantity(item.id)}}>
                                    <AddCircle/>
                                </Button>
                            </CustomTableCell>
                            <CustomTableCell>
                            <Button style={{ color: 'white' }} component={Link} to="/~frvarb/kasutajaliidesed/prax2/ShoppingCart" onClick={()=>{this.handleSubtractQuantity(item.id)}}>
                                <RemoveCircle/>
                            </Button>
                            </CustomTableCell>
                            <CustomTableCell>
                                <Button style={{ color: 'white' }} onClick={()=>{this.handleRemove(item.id)}}>
                                    <DeleteOutline/>
                                </Button>
                            </CustomTableCell>
                        </TableRow>
                    )
                })
            ): <TableRow></TableRow>;

        return (
            <div>
                <div className={classes.itemContainer}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Product</CustomTableCell>
                                <CustomTableCell>Price</CustomTableCell>
                                <CustomTableCell align="center">Amount</CustomTableCell>
                                <CustomTableCell></CustomTableCell>
                                <CustomTableCell></CustomTableCell>
                                <CustomTableCell></CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {addedItems}
                            <TableRow>
                                <CustomTableCell><b>Sum:</b></CustomTableCell>
                                <CustomTableCell><b>{this.props.total}€</b></CustomTableCell>
                                <CustomTableCell align="center"><b>{this.props.itemCount}</b></CustomTableCell>
                                <CustomTableCell></CustomTableCell>
                                <CustomTableCell></CustomTableCell>
                                <CustomTableCell></CustomTableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <View className={classes.responsive}>
                    <div className={classes.itemContainer}>
                        <h3>Items : {this.props.itemCount} tk</h3>
                        <h3>Sum : {this.props.total} €</h3>
                        <Link to="/~frvarb/kasutajaliidesed/prax2/ThankYou" onClick={()=>{this.reset()}}>
                            <img src={logo} alt="logo"/>
                        </Link>
                    </div>
                </View>
            </div>
        );
    }
}

ShoppingCart.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state)=>{
    return{
        items: state.items,
        addedItems: state.addedItems,
        total: state.total,
        itemCount: state.itemCount
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))},
        reset: ()=>{dispatch(resetCart())}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(ShoppingCart));