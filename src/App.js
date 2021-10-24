import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Outdoor from './pages/outdoor';
import Furniture from './pages/furniture';
import HomeDecor from './pages/home-decor';
import Rugs from './pages/rugs';
import Lighting from './pages/lighting';
import StylesInspo from './pages/styles-inspo';

import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart'


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/outdoor' component={Outdoor} />
        <Route path='/furniture' component={Furniture} />
        <Route path='/home-decor' component={HomeDecor} />
        <Route path='/rugs' component={Rugs} />
        <Route path='/lighting' component={Lighting} />
        <Route path='/styles-inspo' component={StylesInspo} />
        <Route path='/SingleProduct' component={SingleProduct} />
        <Route path='/Cart' component={Cart} />
      </Switch>
      
    </Router>
    
    
  );
}

export default App;
