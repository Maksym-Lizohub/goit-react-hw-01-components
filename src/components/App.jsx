import Profile from './Profile/Profile';
import user from '../data/user.json';
import data from '../data/data.json';
import Statistics from './Statistics/Statistics';

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
    </div>
  );
};
