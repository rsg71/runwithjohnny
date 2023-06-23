import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import myProjects from '../../data/Projects';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import "./Portfolio.css";

export default function Portfolio() {

    return (
        <div className="bg-black text-white">


            <Jumbotron title="Training" />

            <Container fluid="md">

                <Row>

                    <Col sm={12} md={8} style={{ margin: "auto" }}>

                        <div>

                            <Row className="mt-5 mb-3">
                                {myProjects.slice(0, 2).map(project => (
                                    <Col key={project.id} sm={12} md={6} className="mb-3 d-flex align-items-center">
                                        <ProjectCard project={project} />
                                    </Col>
                                ))}
                            </Row>

                            <Row className="mb-3">
                                {myProjects.slice(2, 4).map(project => (
                                    <Col key={project.id} sm={12} md={6} className="mb-3 d-flex align-items-center">
                                        <ProjectCard project={project} />
                                    </Col>
                                ))}
                            </Row>

                            <Row className="mb-3">
                                {myProjects.slice(4, 5).map(project => (
                                    <Col key={project.id} sm={12} md={6} className="mb-3 d-flex align-items-center">
                                        <ProjectCard project={project} />
                                    </Col>
                                ))}
                            </Row>

                        
                        </div>
                    </Col>

                </Row>
            </Container>

        </div>
    );
}
