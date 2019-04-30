import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Company from './Company';
import Tooted from './Products';
import Policy from './Policy';
import FAQ from './FAQ';
import ShoppingCart from './ShoppingCart';
import ThankYou from './ThankYou';
import ProductDetails from './ProductDetails';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/~frvarb/kasutajaliidesed/prax2/' component={Tooted}/>
            <Route path='/~frvarb/kasutajaliidesed/prax2/Company' component={Company}/>
            <Route path='/~frvarb/kasutajaliidesed/prax2/FAQ' component={FAQ}/>
            <Route path='/~frvarb/kasutajaliidesed/prax2/Policy' component={Policy}/>
            <Route path='/~frvarb/kasutajaliidesed/prax2/ShoppingCart' component={ShoppingCart}/>
            <Route path='/~frvarb/kasutajaliidesed/prax2/ThankYou' component={ThankYou}/>
            <Route path='/~frvarb/kasutajaliidesed/prax2/Details/:id' component={ProductDetails}/>
        </Switch>
    </main>
);

export default Main