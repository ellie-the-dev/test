import './App.css'
import {useState} from 'react'
import Add from './components/Add'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Main from './components/Main'


const App = () => {
  const [toggle, setToggle] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [noteList, setNoteList] = useState([])


  return (
    <div className="container">
      <Header toggle = {toggle} setToggle={setToggle}/>
      <Sidebar/>
     <Hero inputValue={inputValue} setInputValue={setInputValue} noteList={noteList} setNoteList={setNoteList} setToggle={setToggle}/>
     <Main inputValue={inputValue} setInputValue={setInputValue} noteList={noteList} setNoteList={setNoteList} setToggle={setToggle}/>
      <div className="item task">
          <div className="title">
            <h5>YOUR TASKS</h5>
            <div className="line"></div>
          </div>
      </div>
      {/* <div className="item footer">
        
      </div> */}
    </div>
   );
}
 
export default App;