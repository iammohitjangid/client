import React,{useContext}from 'react'
import {Pagination} from 'react-bootstrap';
import './Paginate.css'

import {StoreContext} from '../store/store';
function Paginate() {
    const page = [0,1,2];
    const{pageHandler,pageSelected} = useContext(StoreContext);
  
    return (
          <Pagination size='lg' className="Paginate">
            { page.map((data,index)=>(
              <Pagination.Item 
              key={index}
              onClick={()=>{pageHandler(data)}}
              active={(pageSelected) === data?true:false}
              >
                {data+1}
              </Pagination.Item>
            ))}
          </Pagination>
    )
}

export default Paginate
