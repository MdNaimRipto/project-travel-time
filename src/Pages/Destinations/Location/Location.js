import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Location = () => {
    const location = useLoaderData()
    console.log(location)
    const { name, description, bgImage } = location
    return (
        <div >
            <div>
                <Card className="bg-dark text-white border-0 rounded-0">
                    <Card.Img className='img-fluid' src={bgImage} alt="Card image" style={{ height: "90vh" }} />
                    <Card.ImgOverlay className='text-white d-flex flex-column justify-content-center container'>
                        <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center'>
                            <div className='w-lg-50 py-5'>
                                <h1>{name}</h1>
                                <Card.Text>
                                    {description.slice(0, 200) + "..."}
                                </Card.Text>
                                <Link to="/destinations">
                                    <Button className='fw-semibold px-3 py-2'
                                        variant="warning">Return to Destination Page</Button>
                                </Link>
                            </div>

                            <div>
                                <Form className='bg-white rounded p-4'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="text-secondary fw-semibold">Origin</Form.Label>
                                        <Form.Control type="text" className="fw-semibold"
                                            placeholder="Enter Your Current Location" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className="text-secondary fw-semibold">Destination</Form.Label>
                                        <Form.Control className="fw-semibold" type="text" value={name} />
                                    </Form.Group>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <Form.Group className="mb-3 me-3" controlId="formBasicPassword">
                                            <Form.Label className="text-secondary fw-semibold">From</Form.Label>
                                            <Form.Control type="date" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label className="text-secondary fw-semibold">To</Form.Label>
                                            <Form.Control type="date" placeholder="Password" />
                                        </Form.Group>
                                    </div>
                                    <Button className='w-100 fw-semibold px-3 py-2'
                                        variant="warning" type="submit">
                                        Start Booking
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>

        </div>
    );
};

export default Location;