import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar"

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/thiagovanzele.png',
      name: 'Thiago Vanzele',
      role: 'Dev Fullstack'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀👉'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-10-15 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/rogersds.png',
      name: 'Roger Souza',
      role: 'Dev Fullstack'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀👉'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-10-19 13:00:00'),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wraper}>
        <Sidebar />
        <main>
          
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
          
        </main>
      </div>
    </>
  );
}

export default App;
