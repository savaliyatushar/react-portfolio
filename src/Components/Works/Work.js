import React, { useEffect, useRef, useState } from 'react';
import { Row, Stack } from 'react-bootstrap';
import CountUp from 'react-countup';
import "./Work.css";

function Work() {
  const workref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const mainwork = workref.current;

    const handleScroll = () => {
      if (mainwork) {
        const top = mainwork.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.9) {
          mainwork.classList.add('animate');
          setInView(true);
        } else {
          mainwork.classList.remove('animate');
          setInView(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='main-work'>
      <section ref={workref} className='main-section'>
        <div className='worksite'>
          <Row className='main-row'>
            <Stack className=' main-stack' direction="horizontal" gap={5}>
              
              <div className="p-2 m-4">
                <div className='text-center'>
                  <h2>0{inView && <CountUp end={6} duration={3} />}+</h2>
                  <span>Months Experience</span>
                </div>
              </div>
              <div className="p-2 m-4">
                <div className='text-center'>
                  <h2>{inView && <CountUp end={58} duration={5} />}+</h2>
                  <span>Project Complete</span>
                </div>
              </div>

              <div className="p-2 m-4">
                <div className='text-center'>
                  <h2>{inView && <CountUp end={45} duration={5} />}+</h2>
                  <span>Happy clients</span>
                </div>
              </div>
              <div className="p-2 m-4">
                <div className='text-center'>
                  <h2>0{inView && <CountUp end={9} duration={3} />}+</h2>
                  <span>Award Winner</span>
                </div>
              </div>
            </Stack>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default Work;
