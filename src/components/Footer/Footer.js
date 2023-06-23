import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css"

export default function Footer() {
    return (
        <div style={{ marginTop: "6rem" }}>
            <div className="container-fluid fluidFooter mt-5" style={{ textAlign: "center" }}>
                <Row>
                    <Col>
                        <h5>Account Links</h5>
                        <p>
                            <a className="noUnderLine" href="https://github.com/rsg71" target="_blank" rel="noreferrer">Github <i className="fab fa-github"></i></a>
                        </p>
                        <p>
                            <a className="noUnderLine" href="https://www.linkedin.com/in/robert-greenawalt/" target="_blank" rel="noreferrer">LinkedIn <i
                                className="fab fa-linkedin"></i></a>
                        </p>
                    </Col>
                    <Col>
                        <h5>Site Navigation</h5>
                        <p><Link to="/portfolio" className="noUnderLine">Portfolio</Link></p>
                        <p><Link to="/resume" className="noUnderLine">Resume</Link></p>
                        <p><Link to="/contact" className="noUnderLine">Contact</Link></p>
                    </Col>
                    <Col>
                        <h5>Get in Touch</h5>
                        <p><a className="noUnderLine" href="mailto:johnnyhogue3@gmail.com">
                            johnnyhogue3@gmail.com</a></p>
                        <p><a className="noUnderLine" href="tel:304.481.9397">(304)-481-9397</a></p>
                    </Col>
                </Row>
            </div>

        </div>
    );

}
