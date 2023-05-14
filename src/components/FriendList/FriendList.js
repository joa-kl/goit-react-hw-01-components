import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendsListItem } from './FriendsListItem';

export const FriendsList = ({ friends }) => {
    return (
        // <div>
        <ul className={css.friendsList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendsListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    )
};