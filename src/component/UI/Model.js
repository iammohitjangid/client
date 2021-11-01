import React from 'react'
import { Modal,Button } from 'react-bootstrap';
import Graph from '../detailContainer/graphContainer/Graph';

function Model({ show, onHide }) {
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={onHide}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <p className="h3 text-center"> Graph</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <Graph
                    tooltip="true"
                    width="500"
                    height="200"
                    label="true"
                />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Model
