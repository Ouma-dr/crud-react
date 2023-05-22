
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { addPost, deletePost, updatePost } from './rtk/postsSlice';



function App() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [newtitle, setNewtitle] = useState("");
  const [newdesc, setNewdesc] = useState("");
  const [id, setId] = useState(null);
console.log(title, desc)

  const [update, setUpdate] = useState(false);

const dispatch = useDispatch();
const posts = useSelector(state => state.posts.items);

  return (
    <div className="App">
      <h1>CRUD APP</h1>
      
      <div className="Form">
        <div className='input'>
        
         <input 
           value= {title}
           type="text"
           placeholder="title" 
           onChange={(e) =>setTitle(e.target.value)}
         />
         <input
           value= {desc} 
           type="text"
           placeholder="description" 
           onChange={(e) =>setDesc(e.target.value)}
           />
        </div>
        <div className='button'>
         <button
           onClick={() => {dispatch(addPost({id: posts.length + 1, title, desc}))
          setTitle("");
          setDesc("");
          }}
         >Add</button>
         </div>
      </div>
      <div className="Posts">

      {posts.length > 0 && posts.map(post=>(
        <div key={post.id} className="Posts">
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
        <button
        onClick={() => {
          setUpdate(true);
          setId(post.id);
        }}>Update</button>

        <button
        onClick={() => {dispatch(deletePost({id: post.id}))}}
        >Delete</button>

        {update && id === post.id && (
          <div>
            <input value={newtitle} type="text" placeholder="new title" onChange={(e) =>setNewtitle(e.target.value)}/>
            <input value={newdesc} type="text" placeholder="new description" onChange={(e) =>setNewdesc(e.target.value)}/>
            <button onClick={()=> { dispatch(updatePost({id: post.id, title: newtitle, desc: newdesc}))
          setUpdate(false);
          }}>Submit</button>
          </div>
        )}
        </div>
      ))}
        
      
      
      </div>
    </div>
  );
}

export default App;
