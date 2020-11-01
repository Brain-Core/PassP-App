
import './App.css';
import React, { Component } from 'react';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import { store } from './store';
import { loadUser } from './actions/userAction';
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());
  }

  state = {  }
  render() { 
    return ( 
      <Provider store = {store}>
        <div>
          <Router>
            <NavBar />
            <Route exact path='/' component={Login} />
            <Route exact path='/SignUp' component={SignUp} />
            <Route exact path='/Profile' component={Profile} />
          </Router>
        
      </div>
    </Provider>
     );
  }
}
 
export default App;