import React from 'react';

// we are able to map through the information coming in because it is an array. To access we use follower(the name of the parameter in map function).id, etc.

const GithubUserFollowers = props => {
    return (
        <>
         {props.followers.map(follower => (
             <a href={follower.html_url}>
                <div key={follower.id} className="follower">
                    <img src={follower.avatar_url} alt={follower.login} />
                    <h3>{follower.login}</h3>
                </div>
            </a>
         ))}
        </>
    );
}

export default GithubUserFollowers
