import { Cake } from '@mui/icons-material'
import './rightbar.css'
import Online from '../online/Online'
import { Users } from '../../../dummyData'



function Rightbar({ currentPage }) {

  const HomeRightBar = ()=>{
    return (
      <>
      <div className="rightBarTop">
          <Cake htmlColor='tomato' className='giftIcon' />
          <p><b>Pola Foster</b> and <b>3 Other Freinds</b> have a birthday today</p>
        </div>
        <div className="rightbarCenter">
          <img src="assets/ads.jpg" alt="" />
        </div>
        <h2>Online Friends</h2>
        <div className="rightbarBottom">
          <ul className="friendList">
            {
              Users.map((u) => (
                <Online key={u.id} user={u} />
              ))
            }
          </ul>
        </div>
        </>
    )
  }


  const ProfileRightBar = ()=>{
    return (
      <>
      <h4 className='infosTitle'>User Informations</h4>
      <div className="UserInfosContainer">
        <div className="Infos">
          <span><b>City :</b></span>
          <span className='infoItems'>Espagne</span>
        </div>
        <div className="Infos">
          <span><b>From :</b></span>
          <span className='infoItems'>Madrid</span>
        </div>
        <div className="Infos">
          <span><b>RelationShip :</b></span>
          <span className='infoItems'>Single</span>
        </div>
      </div>
      <h4 className='infosTitle2'>User friends</h4>
      <div className="userFriendsContainer">
        {/* <div className="singleFr">
          <img src="assets/person4.png" alt="" />
          <span className="userFrName">Hola Gholo</span>
        </div>
        <div className="singleFr">
          <img src="assets/person4.png" alt="" />
          <span className="userFrName">Hola Gholo</span>
        </div>
        <div className="singleFr">
          <img src="assets/person4.png" alt="" />
          <span className="userFrName">Hola Gholo</span>
        </div>
        <div className="singleFr">
          <img src="assets/person4.png" alt="" />
          <span className="userFrName">Hola Gholo</span>
        </div> */}
        {
          Users.map((u)=>(
            <Online key={u.id} user = {u}/>
          ))
        }
      </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {
          currentPage === "home" && (
            <HomeRightBar/>
          )
        }
         {
          currentPage === "profile" && (
            <ProfileRightBar/>
          )
        }

      </div>
    </div>
  )
}

export default Rightbar
