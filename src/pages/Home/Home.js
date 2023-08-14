import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Testimonial from '../../components/Cards/Testimonial';
import MyImageHolder from '../../components/MyImageHolder/MyImageHolder';
import {
    MountainRunImage,
    RaceOneImage,
} from '../../components/Images/Images';
import MosaicGrid from '../../components/MosaicGrid/MosaicGrid';
// import { useNavigate } from 'react-router-dom';
import PriceCard from '../../components/Cards/PriceCard';
import "./Home.css"


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
        row3_rows: 'bg-black text-white mb-5 text-center recursiveFont'
    }

    // const navigate = useNavigate();


    // const history 

    // const goToLink = (url) => {
        // navigate(url)
        // window.location.href = url
    // }

    const CTAButton = () => (
        <button className="btn btn-lg btn-success">Get started</button>
    )

    return (
        <div className="bg-black animate__animated animate__fadeIn mx-3">

            {/* <h3>Here is the image:</h3>
            <div className='p-3 border border-3 border-light'>

                <img src={theLogo} alt="thing" />
            </div> */}

            <Container>
                <div>
                    <Row className="bg-black text-white mb-5 mt-md-5 recursiveFont" >
                        <Col sm={12} md={7} className="mb-4">
                            <h1 style={{ fontSize: "3.5em", letterSpacing: ".05em" }} className="bricolageFont">Personalized Coaching</h1>
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
                            {/* <VidImage /> */}
                            {/* <RunImage /> */}
                        </Col>
                    </Row>

                    <Row className={styles.row} >
                        <Col sm={12} md={6} className="mb-4">
                            {/* <ArmoryImage /> */}
                            <RaceOneImage />
                        </Col>
                        <Col sm={12} md={6} className="ps-md-5 pt-md-3">
                            <h2 className="bricolageFont">Run your Best</h2>
                            <p>Highlight the primary pain point your problem is solving</p>

                            <p style={{ fontSize: 'smaller' }}>I'm a former D1 cross-country and track & field athlete from the University of Richmond. Currently living in Los Angeles. </p>

                            <ul>
                                <li>✅ 12 years of experience</li>
                                <li>✅ Marathon PR of 2:19 <a href="https://worldathletics.org/athletes/united-states/johnny-hogue-14692819" target="_blank" rel="noreferrer" className="noUnderLine">Result </a></li>
                                <li>✅ Sponsored by 2 track clubs</li>
                            </ul>


                        </Col>
                    </Row>


                    <div className="my-5" style={{ marginTop: '50px', marginBottom: '50px' }}>
                        <Row className={styles.row3_rows} >
                            <Col>
                                <div className="mb-5">
                                    <h3 className="bricolageFont">Training Plans</h3>
                                    <p>Fit in your workouts with the best plan for you</p>
                                </div>

                                <div className="my-3 text-dark">
                                    <Row>
                                        <Col sm={12} md={6} className="mb-4">
                                            <PriceCard
                                                price={'100'}
                                                packageName={"One-time Plan"}
                                                planDescription={"Custom built training plan. I'll build a highly effective training plan to help you achieve your goals."}
                                            />
                                        </Col>
                                        <Col sm={12} md={6} className="mb-4">
                                            <PriceCard
                                                price={'150'}
                                                packageName={"Monthly Coaching"}
                                                planDescription={'Personal coaching each month'}
                                            />
                                        </Col>
                                    </Row>
                                </div>

                            </Col>
                        </Row>
                    </div>




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
                                <p>Events that I've participated in and other media</p>
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

                                <form action={htmlLinks.banditRunning} method="get" target="_blank">
                                    <button className="btn btn-success">
                                        Shop now
                                    </button>
                                </form>

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


                    <div className="my-5 homepageLastLink py-5" >
                        <Row className={styles.row3_rows} >
                            <Col>
                                <h3 className="bricolageFont">Free training package</h3>
                                <p>First time customers get a 80% discount on their first training plan. <br /> Let's get started to work together to run your best.</p>

                                <div className="my-3 mt-5">
                                    <button className="btn btn-success">
                                        Get discounted plan
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
