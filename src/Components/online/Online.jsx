import "./online.css"

function Online({user}) {
    return (
        <li className="friendListItem">
            <div className="imgProfile">
                <img src={user.profilePicture} alt="" />
                <span className="onlineCercle"></span>
            </div>
            <span className="FriendName">{user.username}</span>
        </li>
    )
}

export default Online
