import React from "react";
import {
    
    ResponsiveContainer,
    
    
} from "recharts";
function GraphUI({children}) {


    return (
        <div className="my-3"> 
            <ResponsiveContainer 
               width={500}
               height={200}
            >
                {children}
            </ResponsiveContainer>
        </div>
    );
}

export default GraphUI;