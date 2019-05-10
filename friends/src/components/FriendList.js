import React from "react";

function FriendList(props) {
  function routeToFriend(ev, friend) {
    ev.preventDefault();
    props.history.push(`/item-list/${friend.id}`);
  }
  console.log(props.friends);

  return (
    <div className="items-list-wrapper">
      {props.friends.map(friend => (
        <div
          onClick={ev => routeToFriend(ev, friend)}
          className="item-card"
          key={friend.id}
        >
          <p>{friend.name}</p>
        </div>
      ))}
    </div>
  );
}

export default FriendList;
