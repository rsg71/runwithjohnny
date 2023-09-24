import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {
    ArmoryImage, GlassesImage, MidRunImage,
    MountainRunImage, NumberSeventeenImage, RollercoasterEndImage,
    RollercoasterStartImage, VidImage
} from '../Images/Images'

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
        <div>

            <MyRow>
                <Col md={8} className="mb-3">
                    <Row>
                        <Col  className="mb-3">
                            <RollercoasterStartImage />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <MidRunImage />
                        </Col>
                    </Row>

                </Col>
                <Col md={4}>
                    {/* <Row>
                        <Col className="mb-3">
                            <NumberSeventeenImage />
                        </Col>
                       
                    </Row> */}

                    <Row>
                        <Col>
                            <NumberSeventeenImage />
                        </Col>
                    </Row>
                </Col>
            </MyRow>



            <MyRow>

                <Col>
                    <MountainRunImage />

                </Col>
                <Col>
                    <RollercoasterEndImage />
                </Col>
            </MyRow>

            <MyRow>
                <Col>
                    <ArmoryImage />
                </Col>
                <Col>
                    <VidImage />
                </Col>
                <Col>
                    {/* <div style={{ minWidth: '-webkit-fill-available' }}> */}
                    {/* <RunImage /> */}
                    {/* <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.brooklyntrackclub.com%2Fuploads%2F1%2F7%2F0%2F1%2F1701766%2Fmile-0024_orig.jpg&f=1&nofb=1&ipt=731a6fcc57980029fb8ab7a5b13047019ed75f5c1d0a647511d869cc5b2a9630&ipo=images"
                        alt="thing"
                        style={{
                            borderRadius: '5px',
                            minWidth: '100%'
                        }}
                    /> */}

                    <GlassesImage />

                    {/* </div> */}
                </Col>
            </MyRow>



        </div>
    )
}
