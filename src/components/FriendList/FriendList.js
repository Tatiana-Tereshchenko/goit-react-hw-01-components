import PropTypes from 'prop-types'; 
import './FriendList.css'

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

const FriendList = ({ friends }) => {
    return (
        <div className='container'>
            <span className='title'>Friends</span>
        <ul className='fr-item'>
            {friends.map((friend) => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                /> 
            ))}
            </ul>
            </div>
    )
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
    ).isRequired,
};

export default FriendList;