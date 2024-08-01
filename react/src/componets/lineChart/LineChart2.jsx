import React from 'react';
import "./lineChart.css"
import ReactApexChart from 'react-apexcharts'
import { useState } from "react"

export default function LineChart2() {

    const[state, setState] = useState({
        series: [{
            name: 'Humidity',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'Temperature',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
          options: {
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
              type: 'datetime',
              categories: [
                  "2018-09-19 04:01:00.00", 
                  "2018-09-19 08:02:00.00", 
                  "2018-09-19 12:04:00.00", 
                  "2018-09-19 16:01:00.00", 
                  "2018-09-19 20:06:00.00", 
                  "2018-09-20 00:03:00.00", 
                  "2018-09-20 04:02:00.00"
              ]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
    })

  return (
    <div className="chart2">
        <h4 className="chartTitle2">Temperature-Humidity Graph</h4>
        <br></br>
        <br></br>
        <ReactApexChart 
            options={state.options} 
            series={state.series} 
            type="area" 
            height={300} 
            width={700}
        />

    </div>
  )
}

