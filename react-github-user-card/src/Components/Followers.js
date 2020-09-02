import React from 'react'

function Followers(props) {
    return (
        <div>
          {props.followers.map((followers) => (
            <p key={Date.now()} className="follower">
              <img src={followers.avatar_url} alt={followers.login} />
              <h2>{followers.login}</h2>
              <br />
            </p>
          ))}
        </div>
    );
}

export default Followers;