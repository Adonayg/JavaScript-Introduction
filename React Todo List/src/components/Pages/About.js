import React from 'react';

function About() {
    return(
        <React.Fragment>
            <div className="container">
            <h1>About</h1>
            <p>This is the Todo List App v1.0.1. an improvement on the one created using vanilla js.</p>

            <p>This application uses jsonplaceholder.typicode to simulate a back-end</p>

            <a href="https://jsonplaceholder.typicode.com/">Json Place Holder</a>
            </div>
        </React.Fragment>
    )
}

export default About;