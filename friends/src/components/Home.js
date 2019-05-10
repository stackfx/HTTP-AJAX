import React from "react";

function Home(props) {
  const seeFriends = event => {
    event.preventDefault();
    props.history.push("/item-list");
  };

  return (
    <div className="home-wrapper">
      <button onCLick={seeFriends} className="md-button shop-button">
        Find Now!
      </button>
    </div>
  );
}

export default Home;
