import React from 'react';
import './Tool.css';
import { Container, Carousel, Col } from 'react-bootstrap';
import { bs5, chatgpt, css, github, html, javascript, react, reactbs5, sass, vscode } from '../../images';

import ToolData from "./ToolData.json"
const Tool = () => {
    const imageMap = {
        html,
        css,
        reactbs5,
        javascript,
        chatgpt,
        react,
        sass,
        vscode,
        bs5,
        github
    }


    return (
        <div className=''>
            <div className='tool-container'>
                <Container>
                    <Carousel interval={2000}
                        
                        indicators={false}
                        controls={false}
                        pause={false}
                        wrap={true}
                        slide={true}
                        
                        >
                        {ToolData.map((tools, index) => (
                            <Carousel.Item key={index}>
                                <div className='d-flex justify-content-center'>
                                    <Col lg={12}>
                                        <div className='d-flex justify-content-between flex-wrap'>
                                            {tools.map((tool, toolIndex) => (
                                                <div key={toolIndex}>
                                                    <img
                                                        className={`toolimg${tool.rounded ? ' rounded-5' : ''}`}
                                                        src={imageMap[tool.src]}
                                                        alt={tool.alt}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </Col>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            </div>
        </div>
    );
}

export default Tool;
