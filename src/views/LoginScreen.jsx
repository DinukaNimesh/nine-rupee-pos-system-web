import React, { useState } from 'react';
import { Button, CardTitle, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import '../css/views/login.css';
import logo from '../resource/images/logo/PMG.jpg';
import { ArrowRight } from 'react-feather';
import {useNavigate} from 'react-router-dom';

export default function LoginScreen() {
        const navigate = useNavigate();
        const [password, setPassword] = useState('');


        const submitHandler = () => {
                //TODO: submit button action
                 navigate('dashboard')
        };

        return (
                <>
                        <header className="App-header">
                                <img src={logo} class="pmg-logo" alt="logo" />

                                {/* login form */}
                                <Row>
                                        <Col>
                                                <CardTitle tag='h3' className='font-weight-bold mb-1'>
                                                        WELCOME TO POS SYSTEM!
                                                </CardTitle>
                                        </Col>
                                </Row>
                                <Row  className="mt-2">

                                        <Col>

                                                <div className=" mt-2" style={{ display: 'flex' }} >
                                                        <Input
                                                              
                                                                className=" form-control input-sm"
                                                                id='password'
                                                                type='password'
                                                                name='password'
                                                                placeholder='Password'
                                                                value={password}
                                                                onChange={e => setPassword(e.target.value)}

                                                        />
                                                        <Button color="primary" onClick={submitHandler} ><ArrowRight size={20} /></Button>
                                                        
                                                </div>
                                              
                                        </Col>
                                </Row>

                        </header>
                </>
        )
}
