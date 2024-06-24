// Card.js
import React from 'react';
import './Card.css'; 
import { Card, CardBody, CardText, } from 'react-bootstrap';

const Cards = ({ description, icon, customClass, customClassbody }) => {
    return (
        <div className="main-card">
            <Card className={`card ${customClass}`}>
                <CardBody className={`cardbody ${customClassbody}`}>
                    {icon}
                    <CardText>
                        {description}
                    </CardText>
                </CardBody>
            </Card>

        </div>
    );
};

export default Cards;
