import React from 'react';

const GithubUserFollowers = props => {
    return (
        <>
         {props.followers.map(follower => (
             <div key={follower.id} className="follower">
                 <img src={follower.avatar_url} alt={follower.login} />
                 <h3>{follower.login}</h3>
            </div>
         ))}
        </>
    );
}

export default GithubUserFollowers
