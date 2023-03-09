import styles from './Login.module.css';

import {useState, useEffect} from 'react';

import { useAuth } from '../../hooks/useAuth';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, error: authError, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      email,
      password
    };

    const res = await login(user);

    return res;

  };

  // SUBSTITUI O ERRO DO FORMULÁRIO PELO ERRO QUE VEM DA AUTENTICAÇÃO
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
        <p>Faça seu login para compartilhar suas histórias.</p>
        <form onSubmit={handleSubmit}>
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

          {!loading && <button className='btn'>Entrar</button>}
          {loading && <button className='btn' disabled >Carregando...</button>}
          
          {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Login