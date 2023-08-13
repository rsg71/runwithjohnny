import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { MidRunImage, MountainRunImage, RunImage, TrackImage } from '../Images'

export default function MosaicGrid() {

    const styles = {
        row: 'bg-black text-white mb-4 text-center recursiveFont'
    }


    const MyRow = ({ children }) => (
        <Row className={styles.row}>
            {children}
        </Row>
    )


    return (
        <div className="mx-5">

            <MyRow>
                <Col md={8}>
                    <MountainRunImage />
                </Col>
                <Col md={4}>
                    <Row>
                        <Col className="mb-3">
                            <TrackImage />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <MidRunImage />
                        </Col>
                    </Row>
                </Col>
            </MyRow>

            <MyRow>
                <Col>
                    <MountainRunImage />
                </Col>
                <Col>
                    {/* <div style={{ minWidth: '-webkit-fill-available' }}> */}
                    {/* <RunImage /> */}
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.brooklyntrackclub.com%2Fuploads%2F1%2F7%2F0%2F1%2F1701766%2Fmile-0024_orig.jpg&f=1&nofb=1&ipt=731a6fcc57980029fb8ab7a5b13047019ed75f5c1d0a647511d869cc5b2a9630&ipo=images"
                        alt="thing"
                        style={{ 
                            borderRadius: '5px',
                            minWidth: '100%'
                         }}
                    />
                    {/* </div> */}
                </Col>
            </MyRow>



        </div>
    )
}
