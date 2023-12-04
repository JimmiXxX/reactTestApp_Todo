import {useState} from "react";



export const Header = ({posts, setPosts, options}) => {


    const [title, setTitle] = useState('')
    const addNewPost = (e) =>
    {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
        }
        setPosts([...posts, newPost])
        setTitle('')
    }

    return (
       <div className='border-solid border-[#A4B69E] pb-10 rounded-3xl mt-10'>
           <h1 className='mt-10 m-52 mb-10 p-5 text-2xl font-medium'>Создание заметок для пользователей</h1>
           <div className='flex justify-between ml-52 mr-52'>
               <input
                   type="text"
                   value={title}
                   onChange={e => setTitle(e.target.value)}
                   className='bg-[#A4B69E] placeholder:text-stone-50 text-stone-50 pr-40 pl-10 rounded-lg /}'
                   placeholder={'Введите задачу'}/>
               <button className='p-5 bg-[#A4B69E]  text-stone-50 rounded-lg hover:scale-110 duration-300 m-2' onClick={addNewPost}>Закрепить задачу</button>
           </div>
       </div>
    )
}
