import './App.css'
import {useState} from 'react'
import Add from './components/Add'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'


const App = () => {
  const [toggle, setToggle] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [noteList, setNoteList] = useState([])

  return (
    <div className="container">
      <Header toggle = {toggle} setToggle={setToggle}/>
      <Sidebar/>
     <Hero inputValue={inputValue} setInputValue={setInputValue} noteList={noteList} setNoteList={setNoteList} setToggle={setToggle}/>
      <div className="item main">
        {toggle && <Add/>}

        {noteList.map((note, i) =>(
          <div key = {i}>
            {note}
          </div>
        ))}
      </div>
      <div className="item task">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus assumenda exercitationem quas temporibus error minus! Cum optio et voluptas, mollitia eligendi praesentium nobis reprehenderit! Sequi aliquid autem facere laboriosam?
      </div>
      {/* <div className="item footer">
        
      </div> */}
    </div>
   );
}
 
export default App;