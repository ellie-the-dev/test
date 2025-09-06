import { useState } from "react"
import Add from "./Add"
import Checkbox from "./Checkbox"
const Task = ({toggle,setToggle,taskList, setTaskList, taskInput, setTaskInput}) => {
    // const [isdone, setIsdone] = useState(false)
    const showToggle = () =>{
        setToggle(!toggle)
        console.log(toggle)
    }

    return ( 
         <div className="item task">
          <div className="main-top">
              <div className="title">
                <h5>YOUR TASKS</h5>
                <div className="line"></div>
            </div>
            <div className="task-btn add-btn">
              <button onClick={showToggle}>Add Task</button>
            </div>
          </div>
          <div className="task-body">
            {toggle && <Add taskList={taskList} setTaskList={setTaskList} taskInput={taskInput} setTaskInput={setTaskInput} setToggle={setToggle}/>}
            {taskList.map(task=>(
                <div key = {task.id} className="checkbox">
                  <Checkbox/>
                    <span>{task.text}</span>
                    <button>Delete</button>
                </div>
            ))}
          </div>
      </div>
     );
}
 
export default Task;