import React, { useContext } from 'react'
import GraphUI from '../../UI/GraphUI'
import { StoreContext } from '../../store/store';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Label,
 

} from "recharts";




function Graph({ tooltip, width, height, label }) {
  const { fileData } = useContext(StoreContext);

  const datas = [];
  if (fileData) {
    
    for (let key in fileData) {
     
      datas.push({
        // trick to set anomely 
        "originalValue": fileData[key]["original_value"] <= fileData[key]["max_band"]
          ? fileData[key]["original_value"]
          : null,
        "anomaly": fileData[key]["original_value"] , 
        "forecastedValue": fileData[key]["forecasted_value"],
        "minBand": fileData[key]["min_band"],
        "maxBand": fileData[key]["max_band"]
      });
      
    }

  }
  return (<>

    <GraphUI
      width='100%'
      height='100%'    >
      <LineChart
        data={datas}
        width='100%'
        height='100%'

      >

        <XAxis tick={false}>
          {label && <Label value="TIME" position="insideBottom" />}
        </XAxis>
        <YAxis tick={false}>
          {label && <Label
            value="VALUE"
            position="insideLeft"
          />}
        </YAxis>
        {tooltip && <Tooltip />}
        <Line
          type="monotone"
          dataKey="anomaly"
          stroke="#d44a96"
          dot={false}
          strokeWidth={2}
       
        />
        <Line
          type="monotone"
          dataKey="originalValue"
          stroke="#909ED9"
          dot={false}
          strokeWidth={2}
     
        />
        <Line
          type="monotone"
          dataKey="forecastedValue"
          stroke="#909ED9"
          strokeDasharray="5 5"
          dot={false}
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="minBand"
          stroke="#A1A1A1"
          dot={false}
          strokeWidth={1.5}
          

        />
        <Line
          type="monotone"
          dataKey="maxBand"
          stroke="#A1A1A1"
          dot={false}
          strokeWidth={1.5}
        />
      </LineChart>
    </GraphUI>
            </>
  )
}

export default Graph
