import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Portfolio.css";

export default function Portfolio() {

    return (
        <div className="bg-black text-white bricolageFont">



            <Container fluid="md">

                {/* <Jumbotron title="Testimonials" /> */}
                <div>
                    <div className="text-center py-5">
                        <h1 className="display-4">Testimonials</h1>
                    </div>
                </div>

                <Row>

                    <Col sm={12} md={8} style={{ margin: "auto" }}>

                        <div className="mt-5">
                            <h3>Results from Successful Clients</h3>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, doloribus dolores alias a maxime, deserunt velit reiciendis magnam, saepe aspernatur amet dolorum. Nobis ipsa recusandae perferendis ex, obcaecati minus fuga.</p>

                        </div>
                    </Col>

                </Row>
            </Container>

        </div>
    );
}
