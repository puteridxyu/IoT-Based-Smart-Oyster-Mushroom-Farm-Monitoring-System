import React, { useState, useEffect } from 'react'
import Plot from 'react-plotly.js';
import Chart from "react-apexcharts";
import {ref, onValue, query, orderBy, limitToLast} from 'firebase/database';

const Forecast2 = () => {

  const [data, setData] = useState([{}])
  
  useEffect(() => {
    fetch("forecast").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div className='App'>
       <div className="content">
       <Chart
              
              options={
                {
                    chart: {
                    
                      height: 350,
                      type: 'area'
                    },
                    dataLabels: {
                      enabled: false
                    },
                    stroke: {
                      curve: 'smooth'
                    },
                    xaxis: {
                      
                      categories: data.timestamps
                    },
                    yaxis: {
                        max: 2000,
                        min : 0
                      },
                    tooltip: {
                      x: {
                        format: 'dd/MM/yy HH:mm'
                      },
                    },
                    colors: ['#e19d14'],
                  }
              }
              series={
                [{
                    name: 'Co2',
                    data: data.co2
                  }
                ]
              }
              type="area"
              height={360} 
              width={980}
             
            
            />
            </div>
    </div>
  )
}

export default Forecast2

