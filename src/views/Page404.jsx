import React from 'react';

import { CardTitle, Row, Col } from 'reactstrap';
import { IMAGES } from '../resource/images/illustrate';

function Page404() {
        return (
                <div style={{
                        width: '100vw',
                        height: '100vh',
                        // backgroundColor: '#1C1C1C',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                }}>
                        <Row >
                                <Row className="col-12" style={{justifyContent: 'center'}}>
                                        <img src={IMAGES.image_404} alt="page not found" style={{ width: '400px', height: '400px',}} />
                                </Row>
                                <Row  className="col-12" >
                                        <CardTitle tag='h3' className='font-weight-bold mb-1 ' style={{textAlign: 'center'}} >
                                                PAGE NOT FOUND!
                                        </CardTitle>
                                </Row>
                        </Row>
                </div>
        )
}

export default Page404
