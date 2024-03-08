import './profile.css'
import TopBar from '../../Components/topbar/TopBar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Feed from '../../Components/feed/Feed'
import Rightbar from '../../Components/rightbar/Rightbar'


function Profile() {
  return (
    <div className='profile'>
      <TopBar />
      <div className='profileContainer'>
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="Cover">
                <img src="assets/profile.jpg" alt=""  className='imgCover'/>
                <img src="assets/person1.jpg" alt="" className='imgProfilePicture'/>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Eric Garcia</h4>
              <span>Hello My Friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar currentPage="profile"/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
