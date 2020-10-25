import React, { Component } from 'react';
import '../css/Login.css'

class Login extends Component {
    state = {  }
    render() { 
        return ( 
        <div className='container mt-4'>
            <form >
                <div className="loginDiv">
                    <div className='form-group'>
                        <input type='text' name='txt_username' placeholder='Enter the username' className='form-control'/>
                    </div>
                    <div className='form-group'>               
                        <input type='password' name='txt_password' placeholder='Enter the password'  className='form-control'/>
                    </div>
                <button type='submit'  className='btn btn-primary'>Login</button>
            </div>
            </form>
            
        </div>
         );
    }
}
 
export default Login;