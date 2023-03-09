import styles from './NavBar.module.css';
import { NavLink } from "react-router-dom";

import { useAuth } from '../../hooks/useAuth';
import { useAuthContextProvider } from '../../context/AuthContext'

const NavBar = () => {
  
  const { user } = useAuthContextProvider();
  const { logout } = useAuth();

  return (
    
      <nav className={styles.navbar}>
        <NavLink 
          to='/' 
          className={styles.brand}>
            Mini <span>BLOG</span>
        </NavLink>

        <ul className={styles.links_list}>
          <li>
            <NavLink 
              to='/' 
              className={({isActive}) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>

          {!user && (
            <>
              <li>
                <NavLink 
                  to='/login' 
                  className={({isActive}) => (isActive ? styles.active : "")}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/Register' 
                  className={({isActive}) => (isActive ? styles.active : "")}
                >
                  Cadastre-se
                </NavLink>
              </li>
            </>
          )}

          {user && (
            <>
              <li>
                <NavLink 
                  to='/post/create' 
                  className={({isActive}) => (isActive ? styles.active : "")}
                >
                  New Post
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/dashboard' 
                  className={({isActive}) => (isActive ? styles.active : "")}
                >
                  Dashboard
                </NavLink>
              </li>
            </>
          )}
          
          <li>
            <NavLink 
              to='/about' 
              className={({isActive}) => (isActive ? styles.active : "")}
            >
              About
            </NavLink>
          </li>

            {/* depois criar modal para confirmar que quer deslogar */}
          {user && (
            <li>
              <NavLink to='/'>
                <button onClick={logout}>Sair</button>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
  )
}

export default NavBar