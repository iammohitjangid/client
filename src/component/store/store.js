import React,{useState,useEffect} from 'react';

//importing axios instance(baseURL:localhost:1332) 
import axios from '../../axios';



export const StoreContext  = React.createContext({
    //metric.json data will store here
    metricData:null,
    //data of graph
    fileData:null,
    //for loading 
    loading:false,
    //selected graph data
    current:null,
    //function which will select current graph
    setCurrent:()=>{},
    //for pagination
    pageHandler:()=>{}
});

const StoreProvider=({children})=>{
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [currentRecord,setCurrentRecord] = useState(null);
    const [pageSelected,setPageSelected] = useState(0);
    const [fileData ,setFileData] = useState(null); 

    //initially loading 10 metric in data state 
    useEffect(()=>{
       
        axios.get("/getdata").then(response=>{
            setLoading(true);
            setData(response.data);
            setCurrentRecord([...response.data]);
            setLoading(false);

        }).catch(err=>{
            console.log(err)
        });
        
    },[])
     
    // this function will set current selected graph in currentRecord state
    const setCurrent = (id) =>{
        //filtering array with id receiving from listItems.js  
        const filterArray = data.filter(value=>value._id === id);
        //sending get request for fetching graph data for current selected graph
        axios.get(`/getfile?filename=${id}`).then(response=>{
            setLoading(true);
            setFileData(response.data);
            setLoading(false)
        }).catch(err=>{
            console.log(err);
        })
        setCurrentRecord(filterArray)
    }
    //function for handling pagination
    const pageHandler =(pageNo)=>{
        let url = `/getdata?page=${pageNo}`;
        if(pageNo === 0){
            url="/getdata";
        }
        axios.get(url).then(response=>{
            setLoading(true);
            setData(response.data);
            setLoading(false);

        }).catch(err=>{
            console.log(err)
        });
        setPageSelected(pageNo);
    }

    return(
        
        <StoreContext.Provider  
        value={{
            metricData:data,
            fileData:fileData,
            loading:loading,
            current:currentRecord,
            pageSelected,
            setCurrent,
            pageHandler
            
            }}>
            {children}
        </StoreContext.Provider>
    );
}
{/* exporting  Provider as component  so that all logic remain in store.js*/}
export default StoreProvider


