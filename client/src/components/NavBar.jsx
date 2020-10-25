import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="#">ProfileX</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/Profile">Profile <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">Login</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/SignUp">Sign Up</Link>
            </li>
          </ul>
          <span class="navbar-text">
            
          </span>
        </div>
      </nav> );
    }
}
 
export default NavBar;