import PropTypes from 'prop-types';

import FriendListItem from '../FriendListItem';

import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.FriendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
