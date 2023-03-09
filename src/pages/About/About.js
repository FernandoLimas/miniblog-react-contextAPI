import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Esta aplicação consiste em um blog feito com React e Firebase como banco de dados.
      </p>

      <Link to='/post/create' className='btn'>
        New Post
      </Link>
    </div>
  )
}

export default About