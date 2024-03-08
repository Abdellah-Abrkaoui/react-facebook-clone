import TopBar from '../../Components/topbar/TopBar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Feed from '../../Components/feed/Feed'
import Rightbar from '../../Components/rightbar/Rightbar'
import './home.css'

function Home() {
  return (
    <>
        <TopBar/>

        <div className="homeContainer">
          <Sidebar/>
          <Feed/>
          <Rightbar currentPage="home"/>
        </div>
    </>
  )
}

export default Home
