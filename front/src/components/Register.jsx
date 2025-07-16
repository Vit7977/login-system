import { useState } from 'react';
import '../styles.css';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-cad-container">
        <h1>CADASTRAR</h1>
      <form className="form-cad">
        <input type="text" placeholder="Nome..." required />
        <input type="email" placeholder="Email..." required />
        
        <div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password..."
            required
          />
          {showPassword ? (
            <FaRegEyeSlash className="icon-eye" onClick={() => setShowPassword(false)} />
          ) : (
            <FaRegEye className="icon-eye" onClick={() => setShowPassword(true)} />
          )}
        </div>

        <input type="date" max="9999-12-31" required />
        <button type="submit" className="btn-cad">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;
