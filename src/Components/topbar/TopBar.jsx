import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import './topbar.css'
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <div className='topbar'>
      <div className="topbarLeft">
            <span>Social</span>
      </div>
      <div className="topbarCenter">
            <div className="inputWrapper">
                <Search className='searchIcon'/>
                <input type="text" placeholder='Search for friend , post or video ...'/>
            </div>
      </div>
      <div className="topbarRight">
        <div className="topbarRightLinks">
            <Link to="/" className='link'><span>Homepage</span></Link>
            <span>TimeLine</span>
        </div>
        <div className="topbarRightIcons">
            <div className="IconsWrapper">
                <Person className='topbar_icon'/>
                <div className="badge">1</div>
            </div>
            <div className="IconsWrapper">
                <Chat className='topbar_icon'/>
                <div className="badge">1</div>
            </div>
            <div className="IconsWrapper">
                <Notifications className='topbar_icon'/>
                <div className="badge">1</div>
            </div>
        </div>
        <div className="profileImg">
        <Link to="/profile" className='link'><img src="/public/assets/person1.jpg" className="avatar" alt="" /></Link>
        </div>

      </div>
    </div>
  )
}

export default TopBar
