import Post from './components/molecules/Post/Post';
import { postsData } from './data';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.appContainer}>
      <h1 style={{ textAlign: 'center' }}>Стрічка новин</h1>
      <div className={styles.feed}>
        {postsData.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
