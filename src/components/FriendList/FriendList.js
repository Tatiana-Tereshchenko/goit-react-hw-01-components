import PropTypes from 'prop-types'; 
import './FriendList.css'
import FriendListItem from './FriendListItem.js'



const FriendList = ({ friends }) => {
    return (
        <div className='container_fr'>
            <span className='title'>Friends</span>
            <ul className='fr-item'> {friends.map((friend) => (
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