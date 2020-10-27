import React, { Component } from 'react';
class SignUp extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <form >
                <div className="container mt-4">
                <input type='text' name='txt_name' placeholder='Enter the name' className='form-control'/>
                <br/><br/>
                <input type='text' name='txt_phone' placeholder='Enter the phone number' className='form-control'/>
                <br/><br/>
                <input type='text' name='txt_username' placeholder='Enter the username' className='form-control'/>
                <br/><br/>
                <input type='password' name='txt_password' placeholder='Enter the password'  className='form-control'/>
                <br/><br/>
                <input type='password' name='txt_passwordConfirm' placeholder='confirm the password'  className='form-control'/>
                <br/><br/>
                <button type='submit'  className='btn btn-primary'>Login</button>
            </div>
            </form>
        </div>
         );
    }
}
 
export default SignUp;