import React from 'react';


function Profile  (props)  {
    return (
        <div>
        <h2>name : {props.name}</h2>
        <h2>bio : {props.bio}</h2>
        <h2>profession : {props.profession}</h2>
        <div> profilePhoto : {props.profilePhoto} </div>
        <img src={props.children} />
        </div>
    )
}

export default Profile;