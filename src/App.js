import React from 'react';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import {Route, Switch} from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";
import Layout from "./components/UI/Layout/Layout";
import Orders from "./containers/Orders/Orders";

const App = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={BurgerBuilder}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path='/orders' component={Orders}/>
            <Route render={() => <h1>Not found</h1>}/>
        </Switch>
    </Layout>
);

export default App;
