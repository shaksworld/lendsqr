import Logo from '../Assets/logo.svg';
import Search from '../Assets/search.svg';
import Drop from '../Assets/dropdown.svg';
import Profile from '../Assets/profile.svg';
import Notify from '../Assets/notify.png';
import '../styles/Navbar.scss'
const navbar = () => {
    return <div className='navbar-main'>
        <div className='navbar-logo'>
            <img src={Logo} alt="logo"/>
        </div>
        <div className='navbar-search'>
            <input placeholder='search for somthing'>
            </input>
            <button>
                <img src={Search} alt="search bar"/>
            </button>
        </div>
        <div className='side-bar'>
            <a href='#'>Docs</a>
            <img src={Notify} alt="notification" />
            <img src={Profile} alt="profile" className='profile-picture'/>
            <h4>Adedeji</h4>
            <img src={Drop} alt="drop" className='drop-down-manu'/>
        </div>
    </div>
}
 
export default navbar;