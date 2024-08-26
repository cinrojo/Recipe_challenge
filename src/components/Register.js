import React, { useState } from 'react';
import { useAuth } from '../context/AuthProvider';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth(); // Asegúrate de que useAuth esté importado y que register se obtenga del contexto

  const handleSubmit = (e) => {
    e.preventDefault();
    register(username, password); // Llama a la función register
    alert('Usuario registrado con éxito!');
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Registrar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
