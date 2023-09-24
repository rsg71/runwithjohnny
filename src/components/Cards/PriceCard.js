import React from 'react'
import { Card } from 'react-bootstrap'

export default function PriceCard({
    packageName,
    price,
    planDescription,
    handleClick
}) {
    return (
        <Card className="h-100">
            <Card.Header className="bg-primary text-white">
                {packageName}
            </Card.Header>

            <Card.Body className="p-5">
                <div className="mb-3">
                    <h2><strong>${price}</strong></h2>
                </div>
                <div className="mb-3">
                    {planDescription}
                </div>
                <button className="btn btn-success border" onClick={handleClick}>Book now</button>


            </Card.Body>
            <Card.Footer>
                {/* <div className="text-small">
                    * 15% Discount available for 1<sup>st</sup> time clients
                </div> */}
            </Card.Footer>
        </Card>
    )
}

