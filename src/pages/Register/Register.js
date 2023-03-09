import styles from './Register.module.css';

import {useState, useEffect} from 'react';

import { useAuth } from '../../hooks/useAuth';

const Register = () => {

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');

  const { createUser, error: authError, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPass) {
      setError('As senhas não são iguais!');
      return;
    }

    const res = await createUser(user);

    return res;

  }

  // SUBSTITUI O ERRO DO FORMULÁRIO PELO ERRO QUE VEM DA AUTENTICAÇÃO
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.register}>
        <h1>Cadastre-se. É rápido e fácil.</h1>
        <p>Crie seu usuário e compartilhe momentos importantes com seus amigos.</p>
        <form onSubmit={handleSubmit}>
          <label className='inputWithIcon'>
            <span>Nome de usuário:</span>
            <input
              type="text" 
              name="displayName" 
              required
              placeholder='Nome do usuário'
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <i class="bi bi-person-fill"></i>
          </label>
          <label className='inputWithIcon'>
            <span>E-mail:</span>
            <input 
              type="email" 
              name="email" 
              required
              placeholder='E-mail do usuário'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i class="bi bi-envelope-fill"></i>
          </label>
          <label className='inputWithIcon'>
            <span>Senha:</span>
            <input 
              type="password" 
              name="password" 
              required
              placeholder='Insira sua senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i class="bi bi-lock-fill"></i>
          </label>
          <label className='inputWithIcon'>
            <span>Confirme sua senha:</span>
            <input 
              type="password" 
              name="confirmPass" 
              required
              placeholder='Confirme sua senha'
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <i class="bi bi-lock-fill"></i>
          </label>

          {!loading && <button className='btn'>Cadastre-se</button>}
          {loading && <button className='btn' disabled >Carregando...</button>}
          
          {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Register