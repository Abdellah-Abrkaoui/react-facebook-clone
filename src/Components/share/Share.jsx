import { PermMedia, SentimentVerySatisfied, VideoCameraBack } from '@mui/icons-material'
import './share.css'

function Share() {
    return (
        <div className='share'>
            <div className="shareTop">
                <div className="inputWrapper">
                    <img src="/public/assets/person1.jpg" alt="" />
                    <input type="text" placeholder="What's in your mind ,Abdellah ?" className='shareInput' />
                </div>
                <hr />
            </div>
            <div className="shareBottom">
                <div className="bottomOptions">
                    <div className="shareOptions">
                        <PermMedia htmlColor='green' className='options_icons'/>
                        <span className='optionName'>Photo/Video</span>
                    </div>
                    <div className="shareOptions">
                        <VideoCameraBack htmlColor='red' className='options_icons'/>
                        <span className='optionName'>Live Video</span>
                    </div>
                    <div className="shareOptions">
                        <SentimentVerySatisfied htmlColor='goldenrod' className='options_icons' />
                        <span className='optionName'>Feeling/Activity</span>
                    </div>
                </div>
                <button className="shareBtn">Share</button>
            </div>
        </div>
    )
}

export default Share
