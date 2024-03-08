import { Favorite,MoreVert, ThumbUp } from '@mui/icons-material'
import './post.css'
import { Users } from '../../../dummyData'
import { useState } from 'react'

function Post({pst}) {
  const [like , setLike] = useState(pst.like)
  const [islike , setIsLike] = useState(false)


  const handelClick = ()=>{
    setLike(islike ? like - 1 : like +1)
    setIsLike(!islike)
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={Users.filter((u)=>u.id === pst.userId)[0].profilePicture} alt="" />
                <h6>{Users.filter((u)=>u.id === pst.userId)[0].username}</h6>
                <span>{pst.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span>{pst.desc}</span>
            <img src={pst.photo} alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
            <Favorite htmlColor='tomato' style={{cursor : "pointer"}} onClick={handelClick}/>
            <ThumbUp htmlColor='#0866ff' style={{cursor : "pointer"}} onClick={handelClick}/>
                <span>{like} people Like it</span>
            </div>
            <div className="postBottomRight">
                    <span>{pst.comments} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
