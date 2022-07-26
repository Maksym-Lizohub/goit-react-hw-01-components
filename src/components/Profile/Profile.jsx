const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li key={Object.keys(stats)[0]}>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li key={Object.keys(stats)[1]}>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li key={Object.keys(stats)[2]}>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
