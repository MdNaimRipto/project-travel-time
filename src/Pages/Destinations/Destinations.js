
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Destination from './Destination/Destination';
import "./Destinations.css"

const Destinations = () => {
    const destinations = useLoaderData()
    return (
        <div className='destination-img'>
            <div className='container position-relative d-flex flex-column flex-lg-row justify-content-between'>
                <div className='text-white d-flex flex-column justify-content-center w-100'
                    style={{ height: "90vh" }}>
                    <h1>Choose Your Dream Destination</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laborum aperiam molestias voluptatem impedit reprehenderit.</p>
                </div>
                <div className='d-flex flex-column flex-lg-row'
                    style={{ marginTop: "12%", overflowY: 'hidden', overflowX: 'auto' }}>
                    {
                        destinations.map(destination =>
                            <Destination
                                key={destination.id}
                                destination={destination}
                            >
                            </Destination>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Destinations;