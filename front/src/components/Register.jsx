import { useRef, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import '../styles.css';

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = [{
      nome: form.current.name.value,
      email: form.current.email.value,
      senha: form.current.password.value,
      data_nasc: form.current.birthdate.value
    }]

    try {
      const response = await axios.post('http://localhost:9090/api/user', data[0]);

      if (response.status === 201) {
        alert("Usuário cadastrado com sucesso!");
        form.current.reset();
      }
      else {
        alert("Erro ao cadastrar usuário.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="form-cad-container">
      <h1>CADASTRAR</h1>
      <form className="form-cad" ref={form} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome..." required />
        <input type="email" name="email" placeholder="Email..." required />

        <div>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password..."
            required
          />
          {showPassword ? (
            <FaRegEyeSlash className="icon-eye" onClick={() => setShowPassword(false)} />
          ) : (
            <FaRegEye className="icon-eye" onClick={() => setShowPassword(true)} />
          )}
        </div>

        <input type="date" name="birthdate" max="9999-12-31" required />
        <button type="submit" className="btn-cad">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;
