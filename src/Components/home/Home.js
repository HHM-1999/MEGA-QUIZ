import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css';

const Home = () => {

    const course = useLoaderData();
    // console.log(course.length);
    const [cart, setCard] = useState([
        
    ])
    return (
       
        <div className='container mt-5 home '>
         
            
            <h1 className='bg-info bg-gradient p-2'>Welcome To our Mega Quiz</h1>
            <p className='mt-4 fs-5'>
                As We know that Quizzes encourage pupils' self awareness of progress and self assessment. By taking quizzes, pupils get instant feedback on their responses. And this can help them identify areas they need to develop themselves and highlight progress for them to be proud of. <br></br> So We arrange a Perfect platform for all active Students of different topics quizzes. The Topics are React,Html,Css,Javascript. Students can give quizzes and gaining knowledge with giving several types of MCQ Question in Various Topics . Also they will get Marks immediately which will increasing their Confidence  day by day. <br></br>
                <br></br>
                <span className='mt-5 fs-2 text-danger' >So Guys!!! Checkout all these question and set yourself in topmost level. All the Best...... </span>
            </p>

            <h1> this course: {course.Length}</h1>
        </div>
    );
};

export default Home;