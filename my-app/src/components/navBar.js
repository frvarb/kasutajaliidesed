import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import logo from '../pictures/image.png';
import {Link} from 'react-router-dom';
import '../common/navBar.scss';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { AppBar, Toolbar, Grid, SwipeableDrawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styleSheet = {
    root: {
        flexGrow: 1,
        backgroundColor: 'transparent',
        tintColor: '#ffffff',
    },
    grow: {
        flexGrow: 1,
        color: 'white',
    },
    logo: {
        flex: '30',
    },
    toolbar: {
        flex: '70',
    },
    list : {
        width : 200,
        flexDirection: 'column',
    },
    padding : {
        paddingRight : 30,
        cursor : "pointer",
    },

    sideBarIcon : {
        flex: '10',
        padding : 0,
        color : "white",
        cursor : "pointer",
    }
}

class ResAppBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {drawerActivate:false, drawer:false};
        this.createDrawer = this.createDrawer.bind(this);
        this.destroyDrawer = this.destroyDrawer.bind(this);
    }
    componentWillMount(){
        if(window.innerWidth <= 600){
            this.setState({drawerActivate:true});
        }

        window.addEventListener('resize',()=>{
            if(window.innerWidth <= 600){
                this.setState({drawerActivate:true});
            }
            else{
                this.setState({drawerActivate:false})
            }
        });
    }

    //Small Screens
    createDrawer(){
        const {classes} = this.props;
        let total = this.props.total;
        return (
            <div className={classes.root}>
                <AppBar position="static" className="mainBar">
                    <div style={{flex: '40'}}>
                        <Toolbar>
                            <Grid container directio ="row" justify ="space-between" alignItems="center">
                                <h1>CatstopShop</h1>
                                <MenuIcon
                                    className = {this.props.classes.sideBarIcon}
                                    onClick={()=>{this.setState({drawer:true})}}/>
                            </Grid>
                        </Toolbar>
                    </div>
                </AppBar>

                <SwipeableDrawer
                    open={this.state.drawer}
                    onClose={()=>{this.setState({drawer:false})}}
                    onOpen={()=>{this.setState({drawer:true})}}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={()=>{this.setState({drawer:false})}}
                        onKeyDown={()=>{this.setState({drawer:false})}}
                        style={{backgroundColor: 'black', height: '100%'}}>

                        <View className = {this.props.classes.list}>
                            <Button
                                onClick={() => this.setState({ selected: "/"})}
                                style={{backgroundColor: this.state.selected === "/" ? "gray" : "transparent"}}
                                className="navButton" component={Link} to="/~frvarb/kasutajaliidesed/prax2/">
                                Products
                            </Button>
                            <Button
                                onClick={() => this.setState({ selected: "/Company"})}
                                style={{backgroundColor: this.state.selected === "/Company" ? "gray" : "transparent"}}
                                className="navButton" component={Link} to="/~frvarb/kasutajaliidesed/prax2/Company">
                                Company
                            </Button>
                            <Button
                                onClick={() => this.setState({ selected: "/FAQ"})}
                                style={{backgroundColor: this.state.selected === "/FAQ" ? "gray" : "transparent"}}
                                className="FAQButton" component={Link} to="/~frvarb/kasutajaliidesed/prax2/FAQ">
                                FAQ</Button>
                            <Button
                                onClick={() => this.setState({ selected: "/Policy"})}
                                style={{backgroundColor: this.state.selected === "/Policy" ? "gray" : "transparent"}}
                                className="navButton" component={Link} to="/~frvarb/kasutajaliidesed/prax2/Policy">
                                Policy</Button>
                            <Button
                                onClick={() => this.setState({ selected: "/ShoppingCart"})}
                                style={{backgroundColor: this.state.selected === "/ShoppingCart" ? "gray" : "transparent"}}
                                className="menuButton" component={Link} to="/~frvarb/kasutajaliidesed/prax2/ShoppingCart"
                                aria-label="ShoppingCart">
                                <ShoppingCart/>
                                ({total})
                            </Button>
                        </View>

                    </div>
                </SwipeableDrawer>

            </div>
        );
    }

    //Larger Screens
    destroyDrawer(){
        const {classes} = this.props;
        let total = this.props.total;
        return (
            <div className={classes.root}>
                <AppBar position="static" className="mainBar">
                    <img className={classes.logo} src={logo} alt="logo"/>
                    <Toolbar className={classes.toolbar}>
                        <Button
                            onClick={() => this.setState({ selected: "/"})}
                            style={{backgroundColor: this.state.selected === "/" ? "gray" : "transparent"}}
                            className="navButton" component={Link} to="/~frvarb/kasutajaliidesed/prax2/">
                            Products
                        </Button>
                        <Button
                            onClick={() => this.setState({ selected: "/Company"})}
                            style={{backgroundColor: this.state.selected === "/Company" ? "gray" : "transparent"}}
                            className="navButton" component={Link} to="/~frvarb/kasutajaliidesed/prax2/Company">
                            Company
                        </Button>
                        <Button
                            onClick={() => this.setState({ selected: "/FAQ"})}
                            style={{backgroundColor: this.state.selected === "/FAQ" ? "gray" : "transparent"}}
                            className="FAQButton" component={Link} to="/~frvarb/kasutajaliidesed/prax2/FAQ">
                            FAQ</Button>
                        <Button
                            onClick={() => this.setState({ selected: "/Policy"})}
                            style={{backgroundColor: this.state.selected === "/Policy" ? "gray" : "transparent"}}
                            className="navButton" component={Link} to="/~frvarb/kasutajaliidesed/prax2/Policy">
                            Policy</Button>
                        <Button
                            onClick={() => this.setState({ selected: "/ShoppingCart"})}
                            style={{backgroundColor: this.state.selected === "/ShoppingCart" ? "gray" : "transparent"}}
                            className="menuButton" component={Link} to="/~frvarb/kasutajaliidesed/prax2/ShoppingCart"
                            aria-label="ShoppingCart">
                            <ShoppingCart/>
                            ({total})
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

    render(){

        return(
            <div>
                {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
            </div>
        );
    }
}

ResAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state)=>{
    return{
        total: state.itemCount,
    }
}

export default connect(mapStateToProps)(withStyles(styleSheet)(ResAppBar));