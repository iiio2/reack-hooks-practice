import { useReducer } from 'react';
import InputHook from './hooks/InputHook';
import BookReducer from './reducers/postReducer';
import Counter from './Counter';
import './App.css';

function App() {
  const [title, setName] = InputHook('');
  const [posts, dispatch] = useReducer(BookReducer, [
    { id: 1, title: 'the house' },
    { id: 2, title: "adam's house" },
  ]);

  const addPost = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_POST', post: { title } });
  };

  const deletePost = (id) => {
    dispatch({ type: 'DELETE_POST', id: id });
  };

  return (
    <div className='App'>
      <form onSubmit={addPost}>
        <input
          type='text'
          placeholder='Name'
          value={title}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <ul>
        {posts.map((post) => (
          <li onClick={() => deletePost(post.id)} key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
      <hr />
      <Counter />
    </div>
  );
}

export default App;
