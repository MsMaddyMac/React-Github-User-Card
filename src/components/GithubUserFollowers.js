import React from 'react';

const GithubUserFollowers = props => {
    return (
        <>
         {props.followers.map(follower => (
             <div key={follower.id} className="follower">
                 <img src={follower.avatar_url} alt={follower.name} />
                 <h3>{follower.name}</h3>
            </div>
         ))}
        </>
    );
}

export default GithubUserFollowers
