import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import ProjectCard from '../../components/ProjectCard/ProjectCard';
// import myProjects from '../../data/Projects';
// import ArmoryImage from ''
import Testimonial from '../../components/Cards/Testimonial';
import MyImageHolder from '../../components/MyImageHolder/MyImageHolder';
import { ArmoryImage, MountainRunImage } from '../../components/Images';
import MosaicGrid from '../../components/MosaicGrid/MosaicGrid';
import "./Home.css"
import { useNavigate } from 'react-router-dom';


export const contactLink = "contact.html#/contact";

export const htmlLinks = {
    banditRunning: 'https://banditrunning.com/'
}


export default function Home() {


    // const githubLink = "https://github.com/rsg71";
    // const linkedInLink = "https://www.linkedin.com/in/robert-greenawalt/";
    // const email = "mailto:johnnyhogue3@gmail.com";



    const styles = {
        row: 'bg-black text-white mb-5 my-spacing recursiveFont',
        row3_rows: 'bg-black text-white mb-5 my-spacing text-center recursiveFont'
    }

    const navigate = useNavigate();


    // const history 

    const goToLink = () => {
        navigate()
    }

    const CTAButton = () => (
        <button className="btn btn-lg btn-success">Get started</button>
    )

    return (
        <div className="bg-black animate__animated animate__fadeIn">

            <Container>
                <div>
                    <Row className={styles.row} >
                        <Col sm={12} md={7} className="mb-4">
                            <h1 style={{ fontSize: "3.5em", letterSpacing: ".05em" }} className="bricolageFont">Personalized coaching</h1>
                            <p>Get coaching from a U.S. Olympic trials participant. I help you break PR's and get in your best shape ever.</p>

                            <div>
                                <CTAButton />
                                <div className="mt-3">
                                    <small>⭐⭐⭐⭐⭐ Over 10 clients and counting</small>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={5} className="pt-2">
                            <MountainRunImage />
                            {/* <RunImage /> */}
                        </Col>
                    </Row>

                    <Row className={styles.row} >
                        <Col sm={12} md={6} className="mb-4">
                            <ArmoryImage />
                        </Col>
                        <Col sm={12} md={6} className="pt-2">
                            <h2 className="bricolageFont">Run your best</h2>
                            <p>Highlight the primary pain point your problem is solving</p>

                            <p style={{ fontSize: 'smaller' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint praesentium placeat fugiat quasi enim alias nulla earum. Voluptate numquam quia sint ducimus! Quod consectetur officia, quis dolorum quos nesciunt.</p>

                            <ul>
                                <li>✅ Item with example 1</li>
                                <li>✅ Item with example 2</li>
                                <li>✅ Item with example 3</li>
                            </ul>


                        </Col>
                    </Row>


                    <div className="my-5" style={{ marginTop: '50px', marginBottom: '50px' }}>
                        <Row className={styles.row3_rows} >
                            <Col>
                                <div className="mb-5">
                                    <h3 className="bricolageFont">Testimonials</h3>
                                    <p>Let's get started to work together to run your best.</p>
                                </div>

                                <div className="my-3 text-dark">
                                    <Row>
                                        <Col sm={12} md={4} className="mb-4">
                                            <Testimonial personName='Carter Kauffman' body='Guy is an absolute dog. TCR approves.' />
                                        </Col>
                                        <Col className="mb-4">
                                            <Testimonial personName='Shiloh Smith' body='Went brazyy in WV with this head, never afraid of a challenge' />
                                        </Col>
                                        <Col className="mb-4">
                                            <Testimonial personName='Cruz Hayes' body='Always respectful and helps me when I fall down mud hills' />
                                        </Col>
                                    </Row>

                                </div>
                            </Col>
                        </Row>
                    </div>


                    <div className="my-5">
                        <Row className={styles.row3_rows}>
                            <Col>
                                <h3 className="bricolageFont">Events and Gallery</h3>
                                <p>Events that I've participated in and other stuff</p>
                            </Col>
                        </Row>
                        <MosaicGrid />
                    </div>



                    <div className="my-5" style={{ marginTop: '50px', marginBottom: '50px' }}>
                        <Row className={styles.row} >
                            <Col>
                                <h3 className="bricolageFont">Shop</h3>
                                <p>Check out apparel from my sponsor <a href={htmlLinks.banditRunning} target='_blank' rel='noreferrer'>BanditRunning</a></p>


                                <div className="my-3">
                                    <MyImageHolder
                                        url='https://banditrunning.com/cdn/shop/t/30/assets/png-logo-relief-header.png?v=107289012590908862011675046920'
                                    />
                                </div>

                                <button className="btn btn-success" onClick={() => goToLink(htmlLinks.banditRunning)}>
                                    Shop now
                                </button>

                            </Col>
                            <Col>
                                <div className="">

                                    <div>
                                        <MyImageHolder
                                            url='https://banditrunning.com/cdn/shop/files/Frame_5_f18113cb-24a5-4789-8bc5-ac2a63786587_800x.png?v=1691760716'
                                        />
                                    </div>


                                </div>
                            </Col>
                        </Row>
                    </div>


                    <div className="my-5" style={{ marginTop: '50px', marginBottom: '50px' }}>
                        <Row className={styles.row3_rows} >
                            <Col>
                                <h3 className="bricolageFont">Free training package</h3>
                                <p>Let's get started to work together to run your best.</p>

                                <div className="my-3">
                                    <button className="btn btn-success">
                                        Get package
                                    </button>
                                    {/* <ArmoryImage /> */}

                                </div>
                            </Col>
                        </Row>
                    </div>

                </div>
            </Container>

        </div >
    );
}
