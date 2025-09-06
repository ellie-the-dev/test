import './App.css'
import {useState, useEffect} from 'react'
import ScrollReveal from 'scrollreveal'
import Add from './components/Add'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Main from './components/Main'
import Task from './components/Task'
import { useScrollReveal } from './components/useScrollReveal'
import Loader from './Loader'


const App = () => {
  const revealConfigs = [
    { selector: ".sidebar", delay: 1000, origin: "left" },
    { selector: ".header", delay: 1250, origin: "top" },
    { selector: ".hero", delay: 1500, origin: "bottom" },
    { selector: ".main", delay: 1700, origin: "center" },
    { selector: ".task", delay: 1700, origin: "right" },
  ];

  useScrollReveal(revealConfigs);

  const [toggle, setToggle] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [noteList, setNoteList] = useState([])
  const [taskInput, setTaskInput] = useState("")
  const [taskList, setTaskList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    const timer = setTimeout(()=>{
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return loading ? (<Loader/>) : (
    <div className="container">
      <Header/>
      <Sidebar/>
     <Hero inputValue={inputValue} setInputValue={setInputValue} noteList={noteList} setNoteList={setNoteList} setToggle={setToggle}/>
     <Main inputValue={inputValue} setInputValue={setInputValue} noteList={noteList} setNoteList={setNoteList} setToggle={setToggle}/>
     <Task toggle = {toggle} setToggle={setToggle} taskList={taskList} setTaskList={setTaskList} taskInput={taskInput} setTaskInput={setTaskInput}/>
      {/* <div className="item footer">
        
      </div> */}
    </div>
   );
}
 
export default App;