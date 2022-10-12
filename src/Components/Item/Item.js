import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item, handlequiz }) => {
    const { logo, name, total, id } = item;
    return (
        <div className='col-md-3 mt-5'>
            < div className="card p-2 g-4 w-100 border-dark">
                <img src={logo} className="card-img-top bg-dark" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">total:{total}</p>
                    <Link to={`/quiz/${id}`}>
                        <button href="#" onClick={() => handlequiz(item)} className="btn btn-primary">PRACTICE NOW </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Item;