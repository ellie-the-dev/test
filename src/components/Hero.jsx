import heroImg from '../assets/logimg (2).png'

const Hero = ({inputValue, setInputValue, noteList, setNoteList, setToggle}) => {
     
    const handleInput = (e) =>{
          
        setInputValue(e.target.value)
    }

    const handleClick = () =>{
        if(inputValue === null || inputValue.trim() === "")return

     const today = new Date().toLocaleDateString("en-GB", {
         hour: "numeric",
        minute: "numeric",
        hour12: true
     })

     const newNote = {
        id : Date.now(),
        text: inputValue,
        date: today
     }
        
        setNoteList([...noteList, newNote])
        setInputValue("")
    }
    return ( 
         <div className="item hero">
                <div className="hero-item hero-img">
                  <div className="hero-img-box">
                    <img src= {heroImg} alt="" />
                  </div>
                </div>
                <div className="hero-item hero-msg">
                    <div className="hero-header">
                        <h1>Hey <span className="bold">Marie!</span></h1>
                    </div>
                    <div className="hero-body">
                        <p>Lets note something sppecial today!</p>
                    </div>
                    <div className="hero-input">
                        <input type="text" placeholder="Something memorable..." onChange={handleInput} value={inputValue}/>
                        <button onClick={handleClick}><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
              </div>
     );
}
 
export default Hero;