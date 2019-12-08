import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // must put these in to use bootstrap
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Product1 from './components/product1'; 
import Product2 from './components/product2'; 
import Product3 from './components/product3'; 
import Product4 from './components/product4';
import './index.css';


ReactDOM.render(
  <Router>
    <Navbar className="bg-warning">
      <Link className="p-3" to="/">Product1</Link>
      <Link className="p-3" to="/product2">Product2</Link>
      <Link className="p-3" to="/product3">Product3</Link>
      <Link className="p-3" to="/product4">Product4</Link>
    </Navbar>
    <Switch>
        <Route exact path="/" component={Product1} />
        <Route path="/product2" component={Product2} />
        <Route path="/product3" component={Product3} />
        <Route path="/product4" component={Product4} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
