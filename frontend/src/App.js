import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [word,setWord] = useState('');
  const handSearchSubmit = (e) =>{
    e.preventDefault();
    console.log(word)
  }
  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word = {word} setWord= {setWord} handleSubmit={handSearchSubmit}/>

    </div>
  );
}

export default App;
