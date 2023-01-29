import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';
import './Home.css';

const Home = () => {
    const Courses = useLoaderData();
    // console.log(Courses);
    const { data } = Courses;




    return (
        <div className='container mt-5 home'>
            <h3 className='bg-warning bg-gradient p-2'>Welcome To our Mega Quiz Contest</h3>
            <p className='mt-4 fs-5'>
                We arrange a Perfect platform for all active Students of different topics quizzes. The Topics are React,Html,Css,Javascript. Students can give quizzes and gaining knowledge with giving several types of MCQ Question in Various Topics . Also they will get Marks immediately which will increasing their Confidence  day by day. <br></br>
                <br></br>
                <span className='mt-5 fs-2 text-success' ><b>So Guys!!! Checkout all these question and set yourself in topmost level. All the Best... </b></span>
            </p>

            <div className='container'>
                <div className='row'>
                    {
                        data.map(item => <Item key={item.id} item={item}></Item>)
                    }

                </div>
            </div>
        </div>
    )
}
export default Home;