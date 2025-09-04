import logImg from '../assets/logimg (1).png'
const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="sidebar-m-list">
                <div className="logo">
                    
                    <h3><i class="fa-solid fa-note-sticky fa-beat-fade"></i> PinIt!</h3>
                </div>

                
                    <h5>MENU</h5>
                    <div className="line"></div>

                    <div className="sidebar-menu">
                        <span><i class="fa-regular fa-house"></i> Home</span>
                        <span class= "active"><i class="fa-solid fa-paperclip"></i> Notes</span>
                        <span><i class="fa-solid fa-check"></i> Tasks</span>
                        <span><i class="fa-solid fa-gear fa-spin"></i> Settings</span>
                    </div>
            </div>
            <div className="sidebar-logout">
                <div className="log-img">
                    <img src={logImg} alt="" />
                </div>
                <div className="log-msg">
                    <h4>You're now logged in!</h4>
                    <button>Log Out!</button>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;