import Profile from './Profile/Profile';
import user from '../data/user.json';
import data from '../data/data.json';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';

const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title={'upload stats'} stats={data} />
      <FriendList friends={friends} />;
    </div>
  );
};
