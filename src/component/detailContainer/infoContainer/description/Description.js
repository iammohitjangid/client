import React from 'react'
import { Row,Col } from 'react-bootstrap';

function Description({name ,value}) {
    return (
        
            <Row>
            <Col sm={6}>
           <p className ="p  ">name: <strong className="bg-light px-1 py-1"> {name}</strong></p>
            </Col>
            <Col>
            <p className ="p ">value: <strong className="bg-light px-1 py-1"> {value}</strong></p>

            </Col>
        </Row>
        
    )
}

export default Description
