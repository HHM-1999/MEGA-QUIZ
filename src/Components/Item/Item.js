import React from 'react';

const Item = ({ item }) => {
    console.log(item);
    return (
        <div className='col-md-4 mt-5'>
            < div className="card p-2 w-75">
                <img src="" className="card-img-top" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">title</h5>
                    <p className="card-text">total:</p>
                    <button href="#" className="btn btn-primary">Practice Now</button>
                </div>
            </div>
        </div>
    );
};

export default Item;