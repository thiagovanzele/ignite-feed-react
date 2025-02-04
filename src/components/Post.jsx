import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

    return (
      <article className={styles.post}>
        <header>
          <Avatar src={author.avatarURL} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>

          <time title={publishedDateFormatted} datetime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {content.map(line => {
            if (line.type === 'paragraph') {
              return <p>{line.content}</p>
            } else if (line.type === 'link') {
              return <p><a href="#">{line.content}</a></p>
            }
          })}
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea placeholder="Deixe um comentário"></textarea>

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>
      </article>
    );
  };

