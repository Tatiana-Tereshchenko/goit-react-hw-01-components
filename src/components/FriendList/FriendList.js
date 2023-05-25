import PropTypes from 'prop-types'; 
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem.js'



const FriendList = ({ friends }) => {
    return (
        <div className={css.container_fr}>
            <span className={css.title}>Friends</span>
            <ul className={css.fr_item}> {friends.map((friend) => (
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