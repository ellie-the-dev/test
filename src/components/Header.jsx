import ProfileImg from '../assets/hero.png'
const Header = ({toggle, setToggle}) => {
  const handleToggle = () =>{
    setToggle(!toggle)
  }

    return (  
        <div className="item header">
            <div className="left">
                <div className="search">
                <div className="search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="search-bar">
                    <input type="search" placeholder="Search yor task..." id="" />
                </div>
                <div className="search-box">
                    <button>Search</button>
                </div>
                </div>
            </div>
            <div className="right">
                {/* <div className="add-btn">
                    <button onClick={handleToggle}>
                    <i class="fa-solid fa-plus"></i>Add Task
                    </button>
                </div> */}
                <div className="null"></div>
                <div className="misc">
                <div className="img-box">
                    <div className="img-profile">
                        <img src={ProfileImg} alt="" />
                    </div>
                    <div className="drop-down">
                        <i class="fa-solid fa-caret-down fa-bounce"></i>
                    </div>
                </div>
                <div className="notification">
                    <i class="fa-solid fa-bell fa-shake"></i>
                </div>
                </div>
            </div>
      </div>
    );
}
 
export default Header;