import { Chat, DateRange, Group, HelpOutline, LocalMall, PlayCircle, RssFeed, School, TurnedIn, } from '@mui/icons-material'
import './sidebar.css'
import { Users } from '../../../dummyData'
import Friend from '../friend/Friend'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="topLinks">
          <ul className="linksList">
            <li className="linksListItem">
              <RssFeed className='lits_icons'/>
              <span className="title">Feed</span>
            </li>
            <li className="linksListItem">
              <Chat className='lits_icons'/>
              <span className="title">Chats</span>
            </li>
            <li className="linksListItem">
              <PlayCircle className='lits_icons'/>
              <span className="title">Videos</span>
            </li>
            <li className="linksListItem">
              <Group className='lits_icons'/>
              <span className="title">Groups</span>
            </li>
            <li className="linksListItem">
              <TurnedIn className='lits_icons'/>
              <span className="title">Bookmarks</span>
            </li>
            <li className="linksListItem">
              <LocalMall className='lits_icons'/>
              <span className="title">Jobs</span>
            </li>
            <li className="linksListItem">
              <HelpOutline className='lits_icons'/>
              <span className="title">Questions</span>
            </li>
            <li className="linksListItem">
              <DateRange className='lits_icons'/>
              <span className="title">Events</span>
            </li>
            <li className="linksListItem">
              <School className='lits_icons'/>
              <span className="title">Courses</span>
            </li>
          </ul>
          <button className="showmoreBtn">Show More</button>
          <hr/>
        </div>

        <div className="friendsLinks">
          <ul className="friendList">
            {
              Users.map((u)=>(
                <Friend key={u.id} user={u}/>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
