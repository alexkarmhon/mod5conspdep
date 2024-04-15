import PropTypes from 'prop-types';

import {
  Avatar,
  StatItem,
  StatLabel,
  StatQuantity,
  Stats,
  UserDescription,
  UserInfo,
  UserName,
  UserProfileCard,
} from './Profile.styled';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <UserProfileCard>
      <UserDescription>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </UserDescription>

      <Stats>
        <StatItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{stats.followers}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{stats.views}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{stats.likes}</StatQuantity>
        </StatItem>
      </Stats>
    </UserProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    folowers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
