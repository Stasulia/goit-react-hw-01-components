import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendItem = ({ avatar, name, isOnline, id }) => {
  // const isOnline = id % 2 === 0;
  return (
    <li className={css.item}>
      <span className={`${css.status} ${isOnline ? css.onLine : css.offLine}`}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
