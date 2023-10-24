import React from 'react';
import { Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { EmailIcon, InstagramIcon } from '../Icons/Icons';
import "./Footer.css"

export default function Footer() {

    // const myBorder = "border border-4 border-light ms-5"
    // const myBorder = "ms-5";
    const myBorder = "";

    const email = 'johnnyhogue3@gmail.com';

    const links = {
        instagram: 'https://www.instagram.com/hoguejohnny/'
    }

    const styles = {
        header: "bricolageFont mb-2",
        itemP: 'mb-3'
    }

    return (
        <div style={{ marginTop: "4rem" }}>
            <div className="container-fluid fluidFooter mt-5 ">

                <Row
                    style={{ marginLeft: '20%', marginRight: '20%' }}
                    className="pt-3 myFooterRow ps-3"
                >
                    <Col className={myBorder} sm={12} md={4}>

                        <h5 className={styles.header}>Get in Touch</h5>
                        <div className="text-secondary">
                            <p className="mb-2">
                                <i className="fas fa-phone-alt me-1" style={{ fontSize: 'inherit' }}></i> <a className="noUnderLine" href="tel:304.481.9397">+1 (304) 481 9397</a>
                            </p>
                            <p>
                                <EmailIcon /> <a className="noUnderLine ms-1" href={`mailto:${email}`}>{email}</a>
                            </p>
                        </div>
                    </Col>

                    <Col className={myBorder} sm={12} md={4}>
                        <Row>
                            <Col>
                                <h5 className={styles.header}>Social</h5>
                                <p>
                                    <a className="noUnderLine" href={links.instagram} target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a>
                                </p>
                                {/* <p>
                                    <a className="noUnderLine" href="https://www.linkedin.com/in/robert-greenawalt/" target="_blank" rel="noreferrer">LinkedIn <LinkedInIcon /></a>
                                </p> */}
                            </Col>
                            <Col></Col>
                        </Row>
                    </Col>

                    <Col className={myBorder} sm={12} md={4}>
                        <h5 className={styles.header}>Get in Touch</h5>
                        <p>
                            <a className="noUnderLine" href={`mailto:${email}`}>{email}</a>
                        </p>
                        <p><a className="noUnderLine" href="tel:304.481.9397">(304)-481-9397</a></p>
                    </Col>
                </Row>


                <hr style={{
                    backgroundColor: '#fff',
                    marginLeft: '20%',
                    marginRight: '20%'
                }}
                />


                <div className="pb-3 text-center bricolageFont text-secondary" >
                    &copy; Copyright 2023 Runwithjohnny.com
                </div>
            </div>

        </div>
    );

}
