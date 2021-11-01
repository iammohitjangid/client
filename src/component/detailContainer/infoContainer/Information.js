import React,{useContext} from 'react'
import { Container } from 'react-bootstrap'
import Description from './description/Description'
import {StoreContext} from '../../store/store';


function Information() {
    const {current} =useContext(StoreContext);
   
    
    return (
        < >
        <p className ="h3 text-center ">Dimenstions</p>
        
        <Container className="w-80">
       
        {current ? 
        current[0]['dimensions'].map((val,index)=>( 
            <Description 
             key={index}
             name={val.name}
             value={val.value}
            />
    ))
        : <div>
            <p className="h2 text-center "> Nothing to show</p>

        </div> }
        
        </Container>
        </>
    )
}

export default Information
