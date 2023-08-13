import React from 'react'

export default function MyImageHolder(props) {

    const { url, alt } = props;
    return (
        <img
            src={url}
            alt={alt}
            style={{ borderRadius: '5px' }}
        />
    )
}
