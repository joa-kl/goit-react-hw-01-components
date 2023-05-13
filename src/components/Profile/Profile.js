import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({username,tag,location,avatar,stats}) => {
    const { followers, views, likes } = stats;
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={css.avatar}
                />
                <p className={css.username}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <div className={css.statsDiv}>
            <ul className={css.stats}>
                <li>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{followers}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{views}</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{likes}</span>
                </li>
                </ul>
            </div>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    }),    
}

export default Profile;