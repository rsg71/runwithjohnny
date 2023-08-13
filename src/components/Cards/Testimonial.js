import React from 'react'
import { Card } from 'react-bootstrap'
// import { StarFillIcon } from '../Icons/Icons'

export default function Testimonial({ personName, body }) {
    return (
        <>
            <Card className="h-100 shadow-sm">
                <Card.Header>
                    <span style={{ visibility: 'hidden' }}>A</span>
                </Card.Header>
                <Card.Body>
                    <p>
                        {body || 'Here is a good review from someone who got in great shape'}
                    </p>

                    <div className="mt-3">
                        ⭐⭐⭐⭐⭐
                    </div>

                    <div className="mt-3">
                        <p>{personName}</p>
                    </div>

                </Card.Body>
            </Card>
        </>
    )
}
