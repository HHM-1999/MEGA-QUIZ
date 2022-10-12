import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Mcq = () => {
    const mcq = useLoaderData();
    const { data } = mcq;
    const { name, questions } = data;
    console.log(mcq);
    return (
        <div className='row'>
            <h2 className='text-center'>{name}</h2>
            <div>
                {
                    questions.map(ques => <Question key={ques.id} ques={ques}></Question>)
                }
            </div>

        </div>
    );
};

export default Mcq;