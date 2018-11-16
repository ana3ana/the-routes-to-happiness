import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom'

import './CSS/index.css';
import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';



class Home extends Component{
  render(){
    return(


<BrowserRouter>
  <div>
    <Route path="/Guilty" component={Guilty}/>
    <Route path="/Happy" component={Happy}/>
    <Route path="/Sleepy" component={Sleepy}/>

   <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./Happy/">Happy</Link>
        </li>
        <li>
          <Link to="./Sleepy/">Sleepy</Link>
        </li>
        <li>
          <Link to="./Guilty/">Guilty</Link>
        </li>
      </ul>
    </nav>
  </div>
</BrowserRouter>
    )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
