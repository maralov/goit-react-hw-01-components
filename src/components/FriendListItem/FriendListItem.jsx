import PropTypes from 'prop-types';

import s from './FriendList.module.css';
import defaultAvatar from '../../assets/no-avatar.png';

export default function FriendListItem({ avatar, name, isOnline = false }) {
  return (
    <li className={s.FriendListItem}>
      <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
      <img
        className={s.avatar}
        src={avatar}
        alt={name}
        width="48"
        height="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

FriendListItem.defaultProps = {
  avatar: defaultAvatar,
};
