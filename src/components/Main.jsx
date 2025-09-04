const Main = ({inputValue, setInputValue, noteList, setNoteList, toggle, setToggle}) => {

    const deleteNote = (id) =>{
        setNoteList(noteList.filter((_, index)=> id !== index))
    }
    return ( 
         <div className="item main">
        {toggle && <Add/>}

      <div className="main-top">
        <div className="title">
            <h5>YOUR NOTES</h5>
            <div className="line"></div>
        </div>
        <div className="add-btn">
            <button>Empty</button>
        </div>
      </div>
       <div className="notes">
         {noteList.map((note, i) => (
          <div key={note.id} className="note-card">
            <div className="note-top">
              <div className="note-no">
                <p>{i + 1}</p>
              </div>
              <div className="note-btn">
                <span><i class="fa-solid fa-pen" id="pen"></i></span>
                <span onClick={()=>deleteNote(i)}><i class="fa-solid fa-trash" id="trash"></i></span>
              </div>
            </div>
            <div className="note-body">
              <p>{note.text}</p>
            </div>
            <div className="note-bottom">
                <p className="note-date">{note.date}</p>
            </div>
          </div>
        ))}
       </div>
      </div>
     );
}
 
export default Main;