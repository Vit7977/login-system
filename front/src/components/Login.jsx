import { useState, useRef } from 'react';
import axios from 'axios';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import '../styles.css'

function Login() {
    const [showPassword, setShowPassword] = useState(false)

    const loginForm = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = [{
            email: loginForm.current.email.value,
            senha: loginForm.current.password.value
        }]

        try {
            const response = await axios.post('http://localhost:9090/api/user/login', data[0]);
            if (response.status !== 200) {
                alert("Login failed!");
            }
            alert("Login successful!");
        } catch (error) {
            console.error("Login failed:", error);
        }
    }

    return (
        <div className="form-login-container">
            <h1>LOGIN</h1>
            <form className="form-login" onSubmit={handleSubmit} ref={loginForm}>
                <input type="email" name='email' placeholder="Email..." required />
                <div><input type={showPassword ? 'text' : 'password'} name='password' placeholder="Password..." required />
                    {showPassword ? (
                        <FaRegEyeSlash className="icon-eye" onClick={() => setShowPassword(false)} />
                    ) : (
                        <FaRegEye className="icon-eye" onClick={() => setShowPassword(true)} />
                    )}</div>
                <button type="submit" className="btn-login">Login</button>

                <p className="text-login">Não possui uma conta? <a href="/cadastrar">Cadastrar</a></p>
            </form>
        </div>
    );
}

export default Login;