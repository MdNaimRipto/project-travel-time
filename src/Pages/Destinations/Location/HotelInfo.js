import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HotelInfo = (props) => {
    const { condition, flexibility, img, rooms, title } = props.hotelInfo
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-5">
                    <img src={img} className="img-fluid h-100 rounded-start" alt="..." />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text mb-1 mt-0 text-secondary"><small>{rooms}</small></p>
                        <p className="card-text mb-1 mt-0 text-secondary"><small>{condition}</small></p>
                        <p className="card-text mb-1 mt-0 text-secondary"><small>{flexibility}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelInfo;