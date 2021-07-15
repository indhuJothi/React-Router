import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route,Switch,NavLink} from 'react-router-dom';
import App from './App';
import About from './about';
import Contact from './contact';
import Notfound from './notfound';
import reportWebVitals from './reportWebVitals';


const routing=(
  <Router>
       <div>
      
        <h1>React Router Example</h1>
        <ul>
          {/* <li ><Link to='/'>Home </Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='contact'>Contact</Link></li> */}
         <li> <NavLink to='/' exact activeStyle={{color:'red'}}>Home</NavLink></li>
         <li> <NavLink to='/about' exact activeStyle={{color:'green'}}>About</NavLink></li>
         <li> <NavLink to='/contact' exact activeStyle={{color:'orange'}}>Contact</NavLink></li>
        </ul>
        <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route component={Notfound}/>
        </Switch>
       </div>
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
