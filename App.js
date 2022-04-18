import React, {useEffect} from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import { Switch } from '@material-ui/core';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';


const promise = loadStripe('pk_test_51IajaaSBizdWnaWoIQTqqPevRmtoNqJwn6haCg6sHXDpGhxkIeM1CNXW2CJTETwsRlN2VJ0H7ERPgQJuch8ZrbFa00GmYv5TdO')


function App() {
  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
   //will only run once when the app component loads

   auth.onAuthStateChanged(authUser => {
     console.log('THE USER IS >>>', authUser);

     if(authUser) {
           //user just logged in / user was logged in
           dispatch({
             type: 'SET_USER',
             user: authUser        //this will shoot user into data layer
           })

     } else {
           //the user is logged out 
           dispatch({
           type: 'SET_USER',
           user: null
           })
     }
   })
  }, [])
  return (
    <Router>
      
    <div className="app">
     <Switch>
     <Route path = '/login'>
     <Login />
     </Route>
     <Route path = '/checkout'>
     <Header />
     <Checkout />
     </Route>
     <Route path = '/payment'>
     <Header />
     <Elements stripe={promise}></Elements>
     <Payment />
     </Route>
     <Route path = '/'>
     <Header />
     <Home /> 
     </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
