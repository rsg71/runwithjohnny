import React from 'react';

export default function SomeCard({ project }) {
    const { imageSource, imageAlt, projectLink, repoLink, technologies, name } = project;

    let lastIndex = technologies.length - 1;

    return (
        <div className="animate__animated animate__fadeIn rounded">
            <div className="image">
                <img className="image__img" src={imageSource} alt={imageAlt} style={{ maxWidth: "100%", borderRadius: "4px"}} />
                <div className="image__overlay">
                    <div className="image__title" style={{textAlign: "center"}}>{name}</div>
                    <p className="image__description introlight mx-2">
                        {technologies.map(technology => {
                            if (technologies.indexOf(technology) === lastIndex) {
                                return technology
                            } else {
                                return (technology + ", ")
                            }
                        })}
                    </p>
                    <span>
                        <a className="btn btn-light me-2" target="_blank" href={projectLink} rel="noreferrer">View
                            Project</a>
                        <a className="btn btn-dark" target="_blank" href={repoLink} rel="noreferrer"> <i
                            className="fas fa-code"></i> View Code</a>
                    </span>
                </div>
            </div>
        </div>
    )
}
