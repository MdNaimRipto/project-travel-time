import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Destination = (props) => {
    const { img, name, id } = props.destination
    return (
        <Link to={`/location/${id}`}>
            <Button className='destination-info' style={{ background: "none", border: "none" }}>
                <Card className="bg-dark text-white border-0">
                    <Card.Img src={img} alt="Card image" />
                    <Card.ImgOverlay>
                        <h5>{name}</h5>
                    </Card.ImgOverlay>
                </Card>
            </Button>
        </Link>

    );
};

export default Destination;