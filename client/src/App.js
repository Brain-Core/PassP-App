
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import NavBar from './components/NavBar';

import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path='/' component={Login} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route exact path='/Profile' component={Profile} />
      </Router>
      
    </div>
  );
}

export default App;
