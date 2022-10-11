import React from 'react';

const Course = ({ courses }) => {
    const {logo } = courses;
    return (
        <div>
           <img src={logo} alt=""></img>
        </div>
    );
};

export default Course;