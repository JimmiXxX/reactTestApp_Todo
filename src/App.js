
import {Header} from './components/header/header.tsx'
import {Cards} from "./components/cards/cards.tsx"
import {useState} from "react"


function App() {



    const[posts, setPosts] = useState([
        {
            id: 1,
            title: 'Купить в магазине: хлеб, молоко, сыр, йогурт, 10 яиц, творог и жвачку',
        },
        {
            id: 2,
            title: 'Сходить и забрать клюшку',
        },
        {
            id: 3,
            title: 'Купить всякое для подшипников',
        }
    ])



    const removePost = (post) =>
    {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
      <>
        <Header posts={posts} setPosts={setPosts}/>
          <Cards posts={posts} remover={removePost}/>
      </>
  );
}

export default App;
