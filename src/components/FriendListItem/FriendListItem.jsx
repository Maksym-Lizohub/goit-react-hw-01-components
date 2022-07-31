import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline = false }) => {
  return (
    <li className={s.item}>
      {isOnline ? (
        <span className={s.isOnline}></span>
      ) : (
        <span className={s.status}></span>
      )}
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
