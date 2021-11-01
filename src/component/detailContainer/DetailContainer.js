import React,{useContext}from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import Graph from './graphContainer/Graph';
import Information from './infoContainer/Information';
import SpinnerDiv from '../UI/Spinner';

import { StoreContext} from '../store/store';


function DetailContainer({graphButton}) {
    const {loading } = useContext(StoreContext);
    return (
        <Container 
        className="h-100"
       >
         <Row className=" h-50 border-bottom border-2" >
            <Information />
         </Row >
         
         <Row className="h-50 justify-content-center"   >
          <Graph 
            tooltip={false}
            width={500}
            height={200}
          />
          <Button 
           size="sm" 
           style={{width:'50%',marginTop:"-16px"
           }}
           onClick={()=>{graphButton()}}
           >show Chart</Button>
         </Row>
       </Container>
    )
}

export default DetailContainer
