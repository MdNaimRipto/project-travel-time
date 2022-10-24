import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelInfo from './HotelInfo';

const Hotels = () => {
    const hotels = useLoaderData()
    console.log(hotels)

    return (
        <div className='container py-5 d-flex gap-5'>
            <div>
                <h3 className='my-4'>Stay in {hotels.name}</h3>
                {
                    hotels.hotels.map(hotelInfo =>
                        <HotelInfo
                            key={hotelInfo.id}
                            hotelInfo={hotelInfo}
                        >
                        </HotelInfo>)
                }
            </div>
            <div className='w-100'>
                <iframe src={hotels.mapLink}
                    style={{ width: "100%", height: "110vh" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Hotels;