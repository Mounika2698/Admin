import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Dashboard from './Dashboard';
import Form1 from './Form-1';
import Form2 from './Form-2';
import Form3 from './Form-3';
import Form4 from './Form-4';
import Form6 from './Form-6';
import Form5 from './Form-5';
import Form7 from './Form-7';
import Candidate from './Candidate-list';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Test from './Test';
import App  from './App';


ReactDOM.render(

   <Router>
     <Route exact path="/">
    <Redirect to="/Login" />
</Route>

     <Route path="/App" component = { App  } />
     <Route path="/Dashboard" component = { Dashboard } />
     <Route path="/Form-1" component = { Form1 } />
     <Route path="/Form-2" component = { Form2 } />
     <Route path="/Form-3" component = { Form3 } />
     <Route path="/Form-4" component = { Form4 } />
     <Route path="/Form-5" component = { Form5 } />
     <Route path="/Form-6" component = { Form6 } />
     <Route path="/Form-7" component = { Form7 } />
     <Route path="/Candidate-list" component = { Candidate } />
     <Route path="/Header" component = { Header } />
     <Route path="/Footer" component = { Footer } />
     <Route path="/Login" component = { Login } />
     <Route path="/Test" component = { Test  }  />
    

     
</Router>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
