import React from 'react';
import "./Home.css";
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import location1 from "../../Assets/slide-nav/location1.png"
import Destination from '../Destinations/Destination/Destination';

const Home = () => {
    const destinations = useLoaderData()
    return (
        <div className='destination-img'>
            <div className='container position-relative d-flex flex-column flex-lg-row justify-content-between'>
                <div className='text-white d-flex flex-column justify-content-center w-100'
                    style={{ height: "90vh" }}>
                    <h1>Visit The Beautiful Places In Bangladesh</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laborum aperiam molestias voluptatem impedit reprehenderit.</p>
                </div>
                <div className='d-flex flex-column flex-lg-row'
                    style={{ marginTop: "12%" }}>
                    {
                        destinations.map(destination =>
                            <Destination
                                key={destination.id}
                                destination={destination}
                            >
                            </Destination>)
                    }
                    <Link to={`/allLocation`}>
                        <Button className='destination-info' style={{ background: "none", border: "none" }}>
                            <Card className="bg-dark text-white border-0">
                                <Card.Img src={location1} alt="Card image" />
                                <Card.ImgOverlay>
                                    <h6 className='position-absolute bottom-0 pb-4'>
                                        Visit All Destination's</h6>
                                </Card.ImgOverlay>
                            </Card>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;