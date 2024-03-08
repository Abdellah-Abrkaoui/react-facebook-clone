import './register.css'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className='register'>
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h1>Social</h1>
                    <p>Connect with your friends and the world around you on Social</p>
                </div>
                <div className="registerRight">
                    <div className="registerForm">
                        <input className="registerInputs" type="text" placeholder='Username' />
                        <input className="registerInputs" type="text" placeholder='Email or Phone Number' />
                        <input  className="registerInputs" type="password" placeholder='Password' />
                        <Link to="/login" className='link'><button className="registerBtn">Register</button></Link>
                        <Link to="/login" className='link'><button className="loginBtn">Login Into Account</button></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
