import styles from './Post.module.css';

// hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {
  const { id } = useParams();
  const {document: post, loading} = useFetchDocument('posts', id);

  return (
    <div>
        {loading && <p>Carregando post...</p>}
        {post && (
          <div className={styles.post_container}>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title} />
            <p>{post.body}</p>
            <h3>Este post fala sobre:</h3>
            <div className={styles.tags}>
              {post.tagsArray.map((tag) => (
                <p key={tag}>
                  <span>#</span>
                  {tag}
                </p>
              ))}
            </div>
            <i>Autor: {post.createdBy}</i>
          </div>
        ) }
    </div>
  )
}

export default Post