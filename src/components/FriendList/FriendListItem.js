import PropTypes from 'prop-types'; 
import css from './FriendListItem.module.css';


const FriendListItem  = ({ avatar, name, isOnline }) => {
    const statusClass = isOnline ? `status online` : `status offline`;
        return (
            <li className={css.item_friend}>
                <img className={css.avatar_fr} src={avatar} alt="User avatar" width="48" />
                <p className={css.name_fr}>{name}</p>
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