import PropTypes from 'prop-types'; 

import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {

return (
    <div className={css.container_profile}>
        <div className={css.profile_title}>
            <span className={css.title}>Profile</span>
        </div>
            
        <div className={css.avatar_container}>
            <img 
                src={avatar}
                alt="User avatar"
                className={css.avatar}
    />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
            <li className={css.profile_items}>
                <span className={css.text_item} >Followers</span>
                <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li className={css.profile_items}>
                <span className={css.text_item}>Views</span>
                <span className={css.quantity}>{stats.views}</span>
            </li>
            <li className={css.profile_items}>
                <span className={css.text_item} >Likes</span>
                <span className={css.quantity}>{stats.likes}</span>
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