import './friend.css'

export default function Friend({user}) {
    return (
        <li className="friend">
            <img src={user.profilePicture} alt="" />
            <span className="freindName">{user.username}</span>
        </li>
    )
}
