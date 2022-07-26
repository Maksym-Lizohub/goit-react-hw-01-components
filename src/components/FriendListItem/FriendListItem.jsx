const FriendListItem = ({ avatar, name, isOnline = false, id }) => {
  return (
    <li className="item" key={id}>
      <span className={isOnline ? 'status isOnline' : 'status'}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
