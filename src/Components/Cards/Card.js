// Card.js
import React from 'react';
import './Card.css'; 
import { Card, CardBody, CardImg, CardText, } from 'react-bootstrap';

const Cards = ({ description, img, title, customClass, customClassbody }) => {
    return (
        <div className="main-card">
            <Card className={`card ${customClass}`}>
                     <CardImg src={img} alt="img"></CardImg>
                <CardBody className={`cardbody ${customClassbody}`}>
                    <CardText>
                        <span>{title}</span>
                    </CardText>
                    <CardText>
                        {description}
                    </CardText>
                </CardBody>
            </Card>

        </div>
    );
};

export default Cards;
