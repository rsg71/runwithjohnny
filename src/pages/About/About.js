import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function About() {

    const styles = {
        row: 'bg-black text-white my-5 my-spacing',
        row3_rows: 'bg-black text-white my-5 my-spacing text-center',
        par: 'mb-5'
    }


    return (
        <div>

            <Row className={styles.row}>
                <Col xs={{ span: 11, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    <div className="row animate__animated animate__fadeIn">
                        <div>
                            <h2 className={styles.par}> About </h2>

                            <p className={styles.par}>I'm a former Division 1 Cross Country and Track & Field athlete with over 15 years of competitive running experience. Throughout my running career, I've honed my skills by training in track & field, road racing, and marathon running.</p>

                            <p className={styles.par}>To me, athletic success is defined by more than just numbers. I believe fitness is all-encompassing, so my personal coaching philosophy is rooted in consistency and putting health first. It is my goal to help all of my clients not only conquer their personal goals, but to achieve optimal health and feel great every step of the way.</p>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}
