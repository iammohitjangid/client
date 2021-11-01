import React from 'react';
import { Spinner } from 'react-bootstrap'

function SpinnerDiv() {
    return (
        <div className="w-100 h-100">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default SpinnerDiv
