import React from 'react';

// we use props.user.id and so on because the information coming in is an object and can't be mapped through

const GithubUserCard = props => {
    return (
       <div className="card" key={props.user.id}>
        <img alt="User Avatar" src={props.user.avatar_url} />
        <div className="card-info">
            <h3 className="username">{props.user.name}</h3>
            <p>{props.user.location}</p>
            <p>
                <a href={props.user.html_url}>View Profile</a>
            </p>
            <p>Followers: {props.user.followers}</p>
            <p>Following: {props.user.following}</p>
            <p>Bio: {props.user.bio}</p>
        </div>
       </div>
    )
};

export default GithubUserCard;
