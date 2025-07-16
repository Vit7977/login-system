import { useState } from 'react';
import '../styles.css'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

function Login() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="form-login-container">
            <form className="form-login">
                <input type="email" placeholder="Email..." required />
                <div><input type={showPassword ? 'text' : 'password'} placeholder="Password..." required />
                    {showPassword ? (
                        <FaRegEyeSlash className="icon-eye" onClick={() => setShowPassword(false)} />
                    ) : (
                        <FaRegEye className="icon-eye" onClick={() => setShowPassword(true)} />
                    )}</div>
                <button type="submit" className="btn-login">Login</button>
            </form>
        </div>
    );
}

export default Login;