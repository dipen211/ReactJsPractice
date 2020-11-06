import React from 'react';
import './Useroutput.css';
const userOutput = (props) => {
    return (
<div className="UserOutput">
    <p>Username: {props.userName}</p>
    <p>text text...</p>
</div>
    );
};

export default userOutput;