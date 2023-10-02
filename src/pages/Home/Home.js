import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Testimonial from '../../components/Cards/Testimonial';
import MyImageHolder from '../../components/MyImageHolder/MyImageHolder';
import { MountainRunImage, RaceOneImage } from '../../components/Images/Images';
import MosaicGrid from '../../components/MosaicGrid/MosaicGrid';
import PriceCard from '../../components/Cards/PriceCard';
import BookingModal from '../../components/BookingModal/BookingModal';
import "./Home.css"


export const contactLink = "contact.html#/contact";

export const htmlLinks = {
    banditRunning: 'https://banditrunning.com/'
}


export default function Home() {


    const styles = {
        row: 'bg-black text-white mb-5 my-spacing recursiveFont',
        row3_rows: 'bg-black text-white mb-5 text-center recursiveFont'
    }


    const CTAButton = () => (
        <a href="#training-plans" className="btn btn-lg btn-success">Get started</a>
    );

    const [showOneTimePlanModal, setShowOneTimePlanModal] = useState(false);
    const [showMonthlyCoachingModal, setShowMonthlyCoachingModal] = useState(false);

    const toggleOneTimePlanModal = () => setShowOneTimePlanModal(!showOneTimePlanModal);
    const toggleMonthlyCoachingModal = () => setShowMonthlyCoachingModal(!showMonthlyCoachingModal);

    return (
        <div className="bg-black animate__animated animate__fadeIn mx-3">


            <Container>
                <div>
                    <Row className="bg-black text-white mb-5 mt-md-5 recursiveFont">
                        <Col sm={12} md={7} className="mb-4">
                            <h1 style={{ fontSize: "3.5em" }} className="bricolageFont">Personalized Coaching</h1>
                            <p>Whether you're doing your first 5k or striving to run a new personal best, I'll help you achieve you goals.</p>

                            <div>
                                <CTAButton />
                                <div className="mt-3">
                                    <small>⭐⭐⭐⭐⭐ Over 20 clients across the US and counting</small>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={5} className="pt-2">
                            <MountainRunImage />
                        </Col>
                    </Row>

                    <Row className={styles.row}>
                        <Col sm={12} md={6} className="mb-4">
                            <RaceOneImage />
                        </Col>
                        <Col sm={12} md={6} className="ps-md-5 pt-md-3">

                            <h2 className="bricolageFont">Run your Best</h2>
                            <p>I have 15 years of competitive running experience, which includes everything from track & field to road racing and mountain running. I'm a former Division 1 cross country and track & field athlete.</p>

                            <p>I'm currently living in Los Angeles, CA where I'm training for the US Olympic Trials in the Marathon.</p>

                            <p>It's my goal to help everyone achieve their running goals regardless of experience. My athletes' successes are not defined simply by their 5k times. Run with Johnny to improve your overall fitness.</p>

                            <ul>
                                <li>✅ 15 years of experience</li>
                                <li>✅ Marathon PR of 2:19 <a href="https://worldathletics.org/athletes/united-states/johnny-hogue-14692819" target="_blank" rel="noreferrer" className="noUnderLine">Result </a></li>
                            </ul>

                        </Col>
                    </Row>


                    <div className="my-5" style={{ marginTop: '50px', marginBottom: '50px' }} id="training-plans">
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
                                                handleClick={toggleOneTimePlanModal}
                                            />
                                        </Col>
                                        <Col sm={12} md={6} className="mb-4">
                                            <PriceCard
                                                price={'150'}
                                                packageName={"Monthly Coaching"}
                                                planDescription={'Personal coaching each month'}
                                                handleClick={toggleMonthlyCoachingModal}
                                            />
                                        </Col>
                                    </Row>
                                </div>

                            </Col>
                        </Row>
                    </div>

                    {showOneTimePlanModal &&
                        <BookingModal
                            title="Book One Time Plan"
                            show={showOneTimePlanModal}
                            handleClose={() => setShowOneTimePlanModal(false)}
                            bodyText="I would like to book a one time plan."
                            btnText="Submit"
                        />
                    }
                    {showMonthlyCoachingModal &&
                        <BookingModal
                            title="Book Monthly Coaching Plan"
                            show={showMonthlyCoachingModal}
                            handleClose={() => setShowMonthlyCoachingModal(false)}
                            bodyText="I would like to book a monthly coaching plan."
                            btnText="Submit"
                        />
                    }




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
                                            <Testimonial personName='Ryan D' body='Johnny was so helpful in creating a customized plan for my first half marathon' />
                                        </Col>
                                        <Col className="mb-4">
                                            <Testimonial personName='Rob G' body="I rely heavily on Johny for his personalized workouts. His experience as a runner has been invaluable." />
                                        </Col>
                                        <Col className="mb-4">
                                            <Testimonial personName='Garren H' body="Johnny helped me train for three 5k's and maintain general fitness" />
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


                </div>
            </Container>

        </div >
    );
}
