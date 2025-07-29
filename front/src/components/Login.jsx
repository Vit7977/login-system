import { useState, useRef } from 'react';
import axios from 'axios';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Alert from './Alert';
import '../styles.css';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [alertType, setAlertType] = useState('success');
    const [alertVisible, setAlertVisible] = useState(false);

    const loginForm = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email: loginForm.current.email.value,
            senha: loginForm.current.password.value
        };

        try {
            const response = await axios.post('http://localhost:9090/api/user/login', data);
            if (response.status === 200) {
                setAlertMsg("Login successful!");
                setAlertType("success");
                setAlertVisible(true);
            } else {
                setAlertMsg("Login failed!");
                setAlertType("warning");
                setAlertVisible(true);
            }
        } catch (error) {
            const errorMsg = error.response?.data?.error || "Erro ao fazer login.";
            setAlertMsg(errorMsg);
            setAlertType("error");
            setAlertVisible(true);
        }
    };

    return (
        <div>
            <Alert 
                message={alertMsg} 
                type={alertType} 
                show={alertVisible}
                onClose={() => setAlertVisible(false)}
            />

            <div className="form-login-container">
                <h1>LOGIN</h1>
                <form className="form-login" onSubmit={handleSubmit} ref={loginForm}>
                    <input type="email" name='email' placeholder="Email..." required />
                    <div>
                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            name='password' 
                            placeholder="Password..." 
                            required 
                        />
                        {showPassword ? (
                            <FaRegEyeSlash className="icon-eye" onClick={() => setShowPassword(false)} />
                        ) : (
                            <FaRegEye className="icon-eye" onClick={() => setShowPassword(true)} />
                        )}
                    </div>
                    <button type="submit" className="btn-login">Login</button>
                    <p className="text-login">Não possui uma conta? <a href="/cadastrar">Cadastrar</a></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
