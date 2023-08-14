import React from 'react'
import PriceCard from '../Cards/PriceCard'

export default function PricingCards() {

    const offerings = [
        {
            packageName: 'Option 1',
            price: '100'
        },
        {
            packageName: 'Option 2',
            price: '150'
        },
    ]
    return (
        <div>
            {offerings.map(item => (
                <PriceCard
                    key={item.packageName}
                    packageName={item.packageName}
                    price={item.price}
                />
            ))}
        </div>
    )
}
