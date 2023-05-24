import PropTypes from 'prop-types'; 
import './FriendListItem.css'


const FriendListItem  = ({ avatar, name, isOnline }) => {
    const statusClass = isOnline ? `status online` : `status offline`;
        return (
            <li className="item-friend">
                <img className="avatar-fr" src={avatar} alt="User avatar" width="48" />
                <p className="name-fr">{name}</p>
                <span className={statusClass}></span>
            </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;