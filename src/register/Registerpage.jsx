import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import '../register/registerpage.css';
import { auth } from '../firebaseConfig/firebase';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Registerpage = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [codigo, setCodigo] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Use useNavigate to define navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password, codigo);
      const user = userCredential.user;
      console.log('User registered:', user);
      // Call registro function after successful registration
      registro();
    } catch (error) {
      setError(error.message);
      console.error('Error registering user:', error);
    }
  };

  const registro = () => {
    Swal.fire({
      title: '¡Registro exitoso!',
      text: 'Tu cuenta ha sido creada con éxito',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Registro</h1>
        {error && <p className=" error-message"
        style={{color: "red"}}
        >{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Tu nombre"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Registerpage;
