// css
import styles from './Home.module.css';

// hooks
import { useNavigate, Link } from 'react-router-dom';
import { useState} from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

// components
import { PostDetail } from '../../components/Post/PostDetail';



const Home = () => {

  const [query, setQuery] = useState('');
  const {documents: posts, loading} = useFetchDocuments('posts');

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if(query) {
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <div className={styles.home}>
        <h1>Posts mais recentes</h1>
        <form onSubmit={handleSubmit} className={styles.search_form}>
          <input 
            type="text"
            placeholder='busque por tags...'
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className='btn btn-dark'>Pesquisar</button>
        </form>
        <div>
          {loading && <p>Carregando...</p>}
          {posts && posts.map((post) => (
              <PostDetail key={post.id} post={post}/>
            // <div>
            //   <h3>{post.title}</h3>
            //   <img src={post.image} alt="" />
            //   <p>{post.body}</p>
            //   <i>{post.tagsArray.map(i => (<span><span>#</span>{i}</span>))}</i>
            // </div>
          ))}
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>Não foram encontrados posts</p>
              <Link to='/post/create' className='btn'>Criar seu primeiro post</Link>
            </div>
          )}
        </div>
    </div>
  )
}

export default Home;