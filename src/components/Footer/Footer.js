import React from 'react';
import { Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { InstagramIcon, LinkedInIcon } from '../Icons/Icons';
import "./Footer.css"

export default function Footer() {
    return (
        <div style={{ marginTop: "6rem" }}>
            <div className="container-fluid fluidFooter mt-5" style={{ textAlign: "center" }}>
                <Row>
                    <Col sm={12} md={6}>
                        <Row>
                            <Col></Col>
                            <Col>
                                <h5>Account Links</h5>
                                <p>
                                    <a className="noUnderLine" href="https://github.com/rsg71" target="_blank" rel="noreferrer">Instagram <InstagramIcon /></a>
                                </p>
                                <p>
                                    <a className="noUnderLine" href="https://www.linkedin.com/in/robert-greenawalt/" target="_blank" rel="noreferrer">LinkedIn <LinkedInIcon /></a>
                                </p>
                            </Col>
                            <Col></Col>
                        </Row>

                    </Col>

                    <Col sm={12} md={6}>
                        <h5>Get in Touch</h5>
                        <p><a className="noUnderLine" href="mailto:johnnyhogue3@gmail.com">
                            johnnyhogue3@gmail.com</a></p>
                        <p><a className="noUnderLine" href="tel:304.481.9397">(304)-481-9397</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="mb-0" style={{ color: 'grey' }}>
                            &copy; Copyright 2023 Runwithjohnny.com
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    );

}
