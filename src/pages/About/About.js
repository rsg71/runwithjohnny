import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { contactLink } from '../Home/Home'
import { Link } from 'react-router-dom'

export default function About() {

    const styles = {
        row: 'bg-black text-white my-5 my-spacing recursiveFont',
        row3_rows: 'bg-black text-white my-5 my-spacing text-center recursiveFont'
    }


    return (
        <div>

            <Row className={styles.row}>
                <Col xs={{ span: 11, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    <div className="row animate__animated animate__fadeIn">
                        <div>
                            <h2 className="recursiveFont"> I'm Johnny, a <em className="recursiveFont">certified beast</em> and Olympic Trials participant.</h2>
                            <br />
                            <p className="coreCompetencies recursiveFont">Work with me to get in shape and run your personal best, at any level. Check out some of my <Link to="/portfolio">accomplishments</Link>, follow me on <a href="https://www.linkedin.com/in/robert-greenawalt-43457a14a/" target="_blank" rel="noreferrer" className="font-bold">Instagram</a>, or send me an <a href={contactLink} className="font-bold"> email</a>.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>


            <Row className={styles.row}>
                <Col xs={{ span: 11, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    <div className="row animate__animated animate__fadeIn">
                        <div>
                            <h4 className="recursiveFont"> History</h4>
                            <br />
                            <p className="coreCompetencies recursiveFont">
                                I started running in ...
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>



        </div>
    )
}
