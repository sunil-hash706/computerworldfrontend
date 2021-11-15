import React from 'react'

function Main(props) {
    return (
        <div className="container my-3">
            <div className="jumbotron">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">{props.desp1}</p>
                <hr className="my-4" />
                <h2>Courses in free</h2>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href={props.link} role="button">Learn more</a>
                </p>
            </div>
        </div>
    )
}

export default Main
