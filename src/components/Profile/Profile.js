import PropTypes from 'prop-types'; 
import './Profile.css'


const Profile = ({ username, tag, location, avatar, stats }) => {

return (
    <div className='container_profile'>
        <div className='profile-title'>
            <span className='title'>Profile</span>
        </div>
            
        <div className='avatar-container'>
            <img 
                src={avatar}
                alt="User avatar"
                className="avatar"
    />
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li className="profile-items">
                <span className="text-item" >Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li className="profile-items">
                <span className="text-item">Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li className="profile-items">
                <span className="text-item" >Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
    )
}
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    }).isRequired,
};


export default Profile;