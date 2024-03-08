import './login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
                <div className="loginLeft">
                    <h1>Social</h1>
                    <p>Connect with your friends and the world around you on Social</p>
                </div>
                <div className="loginRight">
                    <div className="loginForm">
                        <input className="loginInputs" type="text" placeholder='Email or Phone Number' />
                        <input  className="loginInputs" type="password" placeholder='Password' />
                        <Link to="/" className='link'><button className="loginBtn">Sign In</button></Link>
                        <span className='forgotPass'>Forgot Password ?</span>
                        <hr className='loginHr'/>
                        <Link to="/register" className='link'><button className="registerBtn">Craete New Account</button></Link>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default Login
