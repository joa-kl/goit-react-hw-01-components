import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
            <span
                style={{ backgroundColor: isOnline ? 'green' : 'red' }}
                className={css.status}
            >
                {isOnline}
            </span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};


FriendsListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
};