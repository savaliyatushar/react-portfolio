import React from 'react'
import {  Row, Stack } from 'react-bootstrap'

function Work() {
  return (
    <>
    <div>
       <section className='bg-success'>
          <div className='worksite'>
           <Row>
              <Stack className=' justify-content-center' direction="horizontal" gap={5}>
                <div className="p-2 m-4">
                  <div className='text-center'>
                    <h2>06+</h2>
                    <span>Months Experiense</span>
                  </div>
                </div>
                <div className="p-2 m-4">
                  <div className='text-center'>
                  <h2>58+</h2>
                  <span>Project Complite</span>
                </div>
                </div>
                <div className="p-2 m-4">
                  <div className='text-center'>
                    <h2>45+</h2>
                    <span>Happy clients</span>
                  </div>
                </div>
                <div className="p-2 m-4">
                  <div className='text-center'>
                    <h2>09+</h2>
                    <span>Awerd Winner</span>
                  </div>
                </div>
               
              </Stack>
           </Row>
          </div>
       </section>
    </div>

    </>
  )
}

export default Work