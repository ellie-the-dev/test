const Add = ({inputValue, setInputValue, noteList, setNoteList, setToggle}) => {
    const handleInput = (e) =>{
        setInputValue(e.target.value)
    }

    const handleClick = () =>{
        if (inputValue === null || inputValue.trim()=== "")return
        setNoteList([...noteList,inputValue])
        setToggle(false)
        setInputValue("")
    }
    return ( 
        <div className="popup">
            <div className="popup-div">
                {inputValue}
                <h1>Add New Note</h1>
                <input type="text" placeholder="Something memorable..." onChange={handleInput} value={inputValue}/>
                <button onClick={handleClick}>Add Note</button>
            </div>
        </div>
     );
}
 
export default Add;