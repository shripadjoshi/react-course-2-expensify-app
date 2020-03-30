// Higher Order Component (HOC) - A componenet (HOC) that renders another component
// Reuse code
// Render hijaking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWorning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ?  <WrappedComponent {...props}/> : <p> You need to be authenticated </p>}
        </div>
    )
};

const AdminInfo = withAdminWorning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='this is the info'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='this is the info'/>, document.getElementById('app'));