import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllLocation from './AllLocation';
import "./AllLocation.css"

const AllLocations = () => {
    const allLocations = useLoaderData()
    console.log(allLocations)
    return (
        <div className='bg-secondary'>
            <div className="display-grid container pt-5">
                {
                    allLocations.map(location =>
                        <AllLocation key={location.id} location={location}></AllLocation>)
                }
            </div>
        </div>
    );
};

export default AllLocations;