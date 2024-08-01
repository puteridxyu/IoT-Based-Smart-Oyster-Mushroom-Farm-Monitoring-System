import React, { useState, useEffect } from 'react'
import Plot from 'react-plotly.js';

const Forecast = () => {

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
                <div class="card-grid">
                    <div class="card">         
                      <Plot 
                          data={[
                              {
                                  x: data.date,
                                  y: data.co2,
                                  type: 'scatter',
                                  mode: 'lines',
                                  marker: {color: 'blue'},
                                  
                              },
                          ]}
                          layout={{paper_bgcolor:'rgba(0,0,0,0)',
                                    plot_bgcolor:'rgba(0,0,0,0)', 
                                    width:460, 
                                    height: 500, 
                                    title: 'Historical Temperature'}}

                      /> 
                    </div>

                    <div class="card">
                        <Plot 
                          data={[
                              {
                                x: data.forecastDate,
                                y: data.forecastCo2,
                                type: 'scatter',
                                mode: 'lines',
                                marker: {color: 'green'},
                              },
                          ]}
                          layout={{ paper_bgcolor:'rgba(0,0,0,0)',
                                    plot_bgcolor:'rgba(0,0,0,0)', 
                                    width:470, 
                                    height: 500, 
                                    title: 'Forecast Temperature'}}

                        />
                    
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Forecast

