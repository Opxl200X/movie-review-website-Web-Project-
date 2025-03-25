// client/src/components/UserProfile.js
import React from 'react';
import './styles/UserProfile.css';


function UserProfile({onLogout}) {
    
    
    return (
    <div class="UserProfile">
        <div class="userimg-item">
        </div>
        <div calss="UserProfile-thumbnail">
            <h1>User name</h1>
            <h4>Email: </h4>
        </div>

    </div>
    );
}

export default UserProfile;
