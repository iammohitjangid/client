import React,{useContext} from 'react'
import {StoreContext} from '../../../store/store';
import './ListItems.css';
function ListItems({measure,metricId}) {
    const{setCurrent,current} = useContext(StoreContext);
    let active =false;
    if(current){
         active = current[0]._id === metricId ?true :false;
    }
    return (
        <div
        className={`ListItems text-center  ${active && 'active text-light' }`}
        
        onClick={()=>setCurrent(metricId)}>
            {measure}
        </div>
    )
}

export default ListItems
