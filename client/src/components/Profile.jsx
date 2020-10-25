import React, { Component } from 'react';
class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <form >
                <div className="container mt-4">
                <div className='form-group'>
                <input type='text' name='txt_name' placeholder='Enter the name' className='form-control'/>
                </div>
                <div className='form-group'>
                <input type='text' name='txt_firstname' placeholder='Enter the firstname' className='form-control'/>
                </div>
                <div className='form-group'>
                <input type='text' name='txt_lastname' placeholder='Enter the lastname' className='form-control'/>
                </div>
                <div className='form-group'>
                <input type='text' name='txt_sex' placeholder='Enter the sex' className='form-control'/>
                </div>
                <div className='form-group'>
                <input type='text' name='txt_date' placeholder='Enter the date' className='form-control'/>
                </div>
                <div className='form-group'>
                <input type='text' name='txt_nationalite' placeholder='Enter the nationalite' className='form-control'/>
                </div>
                <div className='form-group'>
                <input type='text' name='txt_taille' placeholder='Enter the taille' className='form-control'/>
                </div>                
                <button type='submit'  className='btn btn-primary'>Login</button>
            </div>
            </form>
        </div> 
        );
    }
}
 
export default Profile;