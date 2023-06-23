import React from 'react';

export default function Jumbotron({title}) {
    return (
        <div>
            <div className="jumbotron py-5">
                <h1 className="display-4">{title}</h1>
            </div>
        </div>
    );
}
