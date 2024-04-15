import PropTypes from 'prop-types';

import {
  AvatarImg,
  FriendItem,
  FriendName,
  Friends,
  StatusSpan,
} from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id}>
          <StatusSpan isOnline={isOnline}></StatusSpan>
          <AvatarImg src={avatar} alt="User avatar" width="48" />
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
