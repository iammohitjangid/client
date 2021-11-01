import React from 'react'
import { Container } from 'react-bootstrap';

function ListContainer({children}) {
    return (
            
            <Container
             className="h-100 d-flex justify-content-center  border-end  border-2"
             style={{ borderRadius: '40px' }}>
                 {children}
            </Container>
        
    )
}

export default ListContainer
