import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import myProjects from '../../data/Projects';
import "./Home.css"
import { Link } from 'react-router-dom';

export default function Home() {


    const githubLink = "https://github.com/rsg71";
    const linkedInLink = "https://www.linkedin.com/in/robert-greenawalt/";
    const email = "mailto:johnnyhogue3@gmail.com";

    const contactLink = "contact.html#/contact";

    return (
        <div className="bg-black animate__animated animate__fadeIn">

            <Container>
                <div>
                    <Row className="bg-black text-white my-5" >
                        <Col xs={{ span: 11, offset: 1 }} md={{ span: 3, offset: 2 }} className="mb-4">
                            <h1 style={{ fontSize: "3.5em", letterSpacing: ".05em" }} className="bungeeFont">What iiis?</h1>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} md={{ span: 4 }} className="pt-2">
                            <div className="homePageLinks">
                                <h1>
                                    &#91; <a href={githubLink} className="text-decoration-none" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a> , <a href={linkedInLink} className="text-decoration-none" target="_blank" rel="noreferrer"><i
                                        className="fab fa-instagram"></i></a> , <a href={email} className="text-decoration-none"><i
                                            className="far fa-envelope"></i></a> &#93;
                                </h1>
                            </div>
                        </Col>
                    </Row>


                    <Row className="bg-black text-white my-5">
                        <Col xs={{ span: 11, offset: 1 }} md={{ span: 8, offset: 2 }}>
                            <div className="row animate__animated animate__fadeIn">
                                <div>
                                    <h2 className="recursiveFont"> I'm Johnny, a <em className="recursiveFont">certified beast</em> and Olympic Trials participant.</h2>
                                    <br />
                                    <p className="coreCompetencies recursiveFont">Work with me to get in shape and run your personal best, at any level. Check out some of my accomplishments in my <Link to="/portfolio">portfolio</Link>, follow me on <a href="https://www.linkedin.com/in/robert-greenawalt-43457a14a/" target="_blank" rel="noreferrer" className="font-bold">Instagram</a>, or send me an
                                        <a href={contactLink} className="font-bold"> email</a>.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={{ span: 12, offset: 0 }} md={{ span: 8, offset: 2 }}>

                            <Row className="mb-3">
                                <Col sm={12}>
                                    <h3 className="projects animate__animated animate__fadeIn text-white recursiveFont">Why run with me?</h3>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                {myProjects.slice(0, 2).map(project => (
                                    <Col key={project.id} sm={6} md={6} lg={6} className="mb-3 d-flex align-items-center">
                                        <ProjectCard project={project} />
                                    </Col>
                                ))}
                            </Row>

                            <Row className="mb-3">
                                {myProjects.slice(2, 4).map(project => (
                                    <Col key={project.id} sm={6} md={6} lg={6} className="mb-3 d-flex align-items-center">
                                        <ProjectCard project={project} />
                                    </Col>
                                ))}
                            </Row>


                            <Row className="mb-3">
                                <Col sm={12} className="text-end">
                                    <h3 className="projects animate__animated animate__fadeIn text-white recursiveFont">Fart game crazzyyyyy</h3>
                                </Col>
                            </Row>



                            <Row className="mb-3">
                                {myProjects.slice(4, 5).map(project => (
                                    <Col key={project.id} sm={6} md={6} lg={6} className="mb-3 d-flex align-items-center">
                                        <ProjectCard project={project} />
                                    </Col>
                                ))}
                            </Row>

                           

                           


                        </Col>
                    </Row>

                </div>
            </Container>

        </div >
    );
}
