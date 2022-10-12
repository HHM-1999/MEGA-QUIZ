import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';


const Question = ({ ques }) => {
    const { question, options, correctAnswer } = ques;
    // console.log(ques.Length);
    const handleOption = (opt) => {
        if (opt.length === correctAnswer.length) {
            toast("Right answer!");
            // console.log("right");
        }
        else {
            toast("Wrong answer!");
            // console.log("wrong");
        }
    }
    const handleAnswer = (answer) => {
        console.log(answer);
        Swal.fire({
            title: 'Right Answer',
            text: `${answer}`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });

    }
    return (
        <div className='container'>
            <div className='border border-2 my-2 d-flex flex-column justify-content-center align-items-center bg-success text-bg-light'>
                <div className='d-flex align-content-center justify-content-between'>
                    <h2 className='text-center'>{question}</h2>
                    <button className='btn border-0' onClick={() => handleAnswer(correctAnswer)}>👁️</button>
                </div>

                {
                    options.map(opt => <div>

                        <input type="radio" value={opt} name="radio" onChange={() => handleOption(opt)} />
                        <span>{opt}</span>
                        <ToastContainer />
                    </div>)

                }


            </div>
        </div>
    );
};

export default Question;