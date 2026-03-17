import Button from '../../atoms/Button/Button';
import Card from '../../atoms/Card/Card';
import styles from './Post.module.css';

interface PostProps {
  author: string;
  content: string;
  date: string;
  avatar: string;
}

export default function Post({ author, content, date, avatar }: PostProps) {
  return (
    <Card>
      <div className={styles.header}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <div className={styles.info}>
          <span className={styles.author}>{author}</span>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
      <p className={styles.content}>{content}</p>
      <div className={styles.actions}>
        <Button variant="secondary" onClick={() => {}}>
          Лайк
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Коментувати
        </Button>
      </div>
    </Card>
  );
}
