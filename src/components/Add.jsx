import { useState } from "react"
const Add = ({taskInput, setTaskInput, taskList, setTaskList,setToggle}) => {
    const handleInput = (e) =>{
        setTaskInput(e.target.value)
    }
    const [isdone, setIsdone] = useState(false)


    const handleClick = () =>{
        // if (taskInput === null || taskInput.trim()=== "")return
         const taskObj = {
            id: Date.now(),
            text: taskInput,
            // done: isdone
        }

        setTaskList([...taskList, taskObj])
        setToggle(false)
        setTaskInput("")
        // console.log(taskInput)
    }
    return ( 
        <div className="add-popup">
            <div className="hero-input">
                <input type="text" onChange={handleInput} value={taskInput} placeholder="Ex: Do Homework..."/>
                <button onClick={handleClick}><i class="fa-solid fa-plus"></i></button>
            </div>
            
            
        </div>
     );
}
 
export default Add;