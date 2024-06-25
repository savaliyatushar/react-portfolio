import React, { useEffect, useState } from 'react';
import "./Progressbar.css"
import { css, html, javascript, react, reactbs5, sass } from '../../images';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col } from 'react-bootstrap';

const   Progressbars = () => {
    const [htmlProgress, sethtmlProgress] = useState(0);
    const [cssProgress, setcssProgress] = useState(0);
    const [sassProgress, setsassProgress] = useState(0);
    const [reactbs5Progress, setreactbs5Progress] = useState(0);
    const [javascriptprogress, setjavascriptprogress] = useState(0);
    const [reactProgress, setreactprogress] = useState(0);


    useEffect(() => {
        const intervals = [
            setInterval(() => sethtmlProgress(prev => (prev < 90 ? prev + 3 : 90)), 100),
            setInterval(() => setcssProgress(prev => (prev < 80 ? prev + 3 : 80)), 100),
            setInterval(() => setsassProgress(prev => (prev < 83 ? prev + 3 : 83)), 100),
            setInterval(() => setreactbs5Progress(prev => (prev < 85 ? prev + 3 : 85)), 100),
            setInterval(() => setjavascriptprogress(prev => (prev < 58 ? prev + 3 : 58)), 100),
            setInterval(() => setreactprogress(prev => (prev < 55 ? prev + 3 : 55)), 100),

        ];
        return () => intervals.forEach(interval => clearInterval(interval));

    }, []);
    return (
        <div>
            <Col>
            <div className='main-skills '>
                <div className='html-div'>
                    <img src={html}
                        alt='html'
                        className="imgskills"
                    />
                    <ProgressBar
                        variant="success"
                        now={htmlProgress}
                        className='pro-bar'
                    />
                        <span className="progress-text">{`${htmlProgress}%`}</span>
                </div>
            </div>
            <div className='main-skills '>
                <div className='css-div'>
                    <img
                        src={css}
                        alt='html'
                        className="imgskills" />
                    <ProgressBar
                        variant="success"
                        now={cssProgress}
                        className='pro-bar'
                    />
                        <span className="progress-text">{`${cssProgress}%`}</span>
                </div>
            </div>
            <div className='main-skills '>
                <div className='sass-div'>
                    <img
                        src={sass}
                        alt='html'
                        className="sass-imgskills" />
                    <ProgressBar
                        variant="success"
                        now={sassProgress}
                        className='pro-bar'
                    />
                        <span className="progress-text"> {`${sassProgress}%`}</span>

                </div>
            </div>
            <div className='main-skills '>
                <div className='reactbs5-div'>
                    <img
                        src={reactbs5}
                        alt='html'
                        className="imgskills rounded-5" />
                    <ProgressBar
                        variant="success"
                        now={reactbs5Progress}
                        className='pro-bar'
                    />
                        <span className="progress-text">{`${reactbs5Progress}%`}</span>

                </div>
            </div>
            <div className='main-skills '>
                <div className='javascript-div'>
                    <img
                        src={javascript}
                        alt='html'
                        className="imgskills" />
                    <ProgressBar
                        variant="success"
                        now={javascriptprogress}
                        className='pro-bar'
                    />
                        <span className="progress-text"> {`${javascriptprogress}%`}</span>
                </div>
            </div>
            <div className='main-skills '>
                <div className='react-div'>
                    <img
                        src={react}
                        alt='html'
                        className="imgskills" />
                    <ProgressBar
                        variant="success"
                        now={reactProgress}
                        className='pro-bar'
                    />
                        <span className="progress-text"> {`${reactProgress}%`}</span>
                </div>
            </div>
            </Col>
        </div>

    );
}

export default Progressbars;
