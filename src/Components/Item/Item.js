import React from 'react';

const Item = ({ item }) => {
    const { logo, name, total } = item;
    return (
        <div className='col-md-3 mt-5'>
            < div className="card p-2 g-4 w-100 border-dark">
                <img src={logo} className="card-img-top bg-dark" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">total:{total}</p>
                    <button href="#" className="btn btn-primary">Practice Now</button>
                </div>
            </div>
        </div>
    );
};

export default Item;