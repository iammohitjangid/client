import React,{useContext} from 'react'

import {StoreContext } from '../../store/store';
import ListItems from './listItems/ListItems'
import { ListGroup } from 'react-bootstrap';
import ListContainer from '../ListContainer';
import './List.css';

function List() {
    const {metricData} = useContext(StoreContext);
    
    return (
                <ListContainer>
                <ListGroup className="px-3 py-2 my-3 List">
                    {metricData && metricData.map(dataValue=>(
                        <ListItems 
                         key={dataValue._id}
                         measure={dataValue.measure}
                         metricId={dataValue._id}
                         />
                    ))}

                </ListGroup>
                </ListContainer>
    )
}

export default List
