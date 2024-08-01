import StartFirebase from "../../firebaseConfig/index";
import React from 'react';
import {ref, onValue, query, orderBy, limitToLast} from 'firebase/database';

import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

const db = StartFirebase();




export class LineHumTemp extends React.Component {
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        
            const que = query(ref(db, "FarmData"), limitToLast(5));

            onValue(que, (snapshot) => {
                var temps = [];
    
                snapshot.forEach(childSnapshot => {
                    let key = childSnapshot.key;
                    let value = childSnapshot.val();
                    temps.push({"key": key, "value":value});
                });
                //AddAllItemsToTable(temps);
                console.log(temps)
                this.setState({
                    tableData: temps
                });

            });
    
    }

    render(){
        var temp = this.state.tableData.map((row, i) => {
            return row.value.temperature
        })

        var humi = this.state.tableData.map((row, i) => {
            return row.value.humidity
        })


        var time = this.state.tableData.map((row, i) => {
            return row.value.timestamp
        })
    return (
      <div>
        <div className="row">
          <div className="mixed-chart">
          
            <h4 className="miniTitle">Temperature-Humidity Graph</h4>
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
                     
                      categories: time ? time : 0,
                      
                      labels: {
                        show: true,
                        rotate: -15,
                        rotateAlways: false,
                      }

                    },
                    yaxis: {
                        max: 150,
                        min : 0
                      },
                    tooltip: {
                      x: {
                        format: 'dd/MM/yy HH:mm'
                      },
                    },
                    colors: ['#008FFB','#FF4560'],
                  }
              }
              series={
                [{
                    name: 'Humidity',
                    data: humi ? humi : 0,
                  }, {
                    name: 'Temperature',
                    data: temp ? temp : 0,
                 }
                ]
              }
              type="area"
              height={250} 
              width={680}
             
            
            />
          </div>
        </div>
      </div>
    );
  }
}


export class LineHumidity extends React.Component {
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }
  
    componentDidMount(){
        
            const que = query(ref(db, "FarmData"), limitToLast(5));
  
            onValue(que, (snapshot) => {
                var temps = [];
    
                snapshot.forEach(childSnapshot => {
                    let key = childSnapshot.key;
                    let value = childSnapshot.val();
                    temps.push({"key": key, "value":value});
                });
                //AddAllItemsToTable(temps);
                console.log(temps)
                this.setState({
                    tableData: temps
                });
  
            });
    
    }
  
    render(){
  
        var humi = this.state.tableData.map((row, i) => {
            return row.value.humidity
        })
  
  
        var time = this.state.tableData.map((row, i) => {
            return row.value.timestamp
        })
    return (
      <div>
          <div id="chart">
          
            <h4 className="miniTitle1">Humidity </h4>
            <Chart
              
              options={
                {
                  chart: {
                    height: 350,
                    type: 'line',
                    dropShadow: {
                      enabled: true,
                      color: '#000',
                      top: 18,
                      left: 7,
                      blur: 10,
                      opacity: 0.2
                    },
                    toolbar: {
                      show: false
                    }
                  },
                  colors: ['#008FFB'],
                  dataLabels: {
                    enabled: true,
                  },
                  stroke: {
                    curve: 'smooth'
                  },
                 
                  grid: {
                    borderColor: '#e7e7e7',
                    row: {
                      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                      opacity: 0.5
                    },
                  },
                  markers: {
                    size: 1
                  },
                  xaxis: {
                    categories: time ? time : 0,
                   
                    title: {
                      text: 'Time'
                    }
                    ,
                    labels: {
                      show: true,
                      rotate: -15,
                      rotateAlways: false,
                    }
                  },
                  yaxis: {
                    title: {
                      text: 'Humidity'
                    },
                    min: 60,
                    max: 110
                  },
                  legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: true,
                    offsetY: -25,
                    offsetX: -5
                  }
                }
              }
              series={
                [
                  {
                    name: "Humidity",
                    data: humi ? humi : 0,
                  },
                ]
              }
              type="area"
              height={360} 
               width={650}
             
            
            />
          </div>
        </div>
      
    );
  }
}


export class LineTemperature extends React.Component {
  constructor(){
      super();
      this.state = {
          tableData: []
      }
  }

  componentDidMount(){
      
          const que = query(ref(db, "FarmData"), limitToLast(5));

          onValue(que, (snapshot) => {
              var temps = [];
  
              snapshot.forEach(childSnapshot => {
                  let key = childSnapshot.key;
                  let value = childSnapshot.val();
                  temps.push({"key": key, "value":value});
              });
              //AddAllItemsToTable(temps);
              console.log(temps)
              this.setState({
                  tableData: temps
              });

          });
  
  }

  render(){

      var temp = this.state.tableData.map((row, i) => {
          return row.value.temperature
      })


      var time = this.state.tableData.map((row, i) => {
          return row.value.timestamp
      })
  return (
    <div>
        <div id="chart">
        
          <h4 className="miniTitle1">Temperature </h4>
          <Chart
            
            options={
              {
                chart: {
                  height: 350,
                  type: 'line',
                  dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                  },
                  toolbar: {
                    show: false
                  }
                },
                colors: ['#FF4560'],
                dataLabels: {
                  enabled: true,
                },
                stroke: {
                  curve: 'smooth'
                },
               
                grid: {
                  borderColor: '#e7e7e7',
                  row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                  },
                },
                markers: {
                  size: 1
                },
                xaxis: {
                  categories: time ? time : 0,
                 
                  title: {
                    text: 'Time'
                  },
                  labels: {
                    show: true,
                    rotate: -15,
                    rotateAlways: false,
                  }
                },
                yaxis: {
                  title: {
                    text: 'Temperature'
                  },
                  min: 20,
                  max: 45
                },
                legend: {
                  position: 'top',
                  horizontalAlign: 'right',
                  floating: true,
                  offsetY: -25,
                  offsetX: -5
                }
              }
            }
            series={
              [
                {
                  name: "Temperature",
                  data: temp ? temp : 0,
                },
              ]
            }
            type="area"
            height={360} 
            width={650}
           
          
          />
        </div>
      </div>
    
  );
}
}

export class LineCo2 extends React.Component {
  constructor(){
      super();
      this.state = {
          tableData: []
      }
  }

  componentDidMount(){
      
          const que = query(ref(db, "FarmData"), limitToLast(5));

          onValue(que, (snapshot) => {
              var temps = [];
  
              snapshot.forEach(childSnapshot => {
                  let key = childSnapshot.key;
                  let value = childSnapshot.val();
                  temps.push({"key": key, "value":value});
              });
              //AddAllItemsToTable(temps);
              console.log(temps)
              this.setState({
                  tableData: temps
              });

          });
  
  }

  render(){

      var co2 = this.state.tableData.map((row, i) => {
          return row.value.co2
      })


      var time = this.state.tableData.map((row, i) => {
          return row.value.timestamp
      })
  return (
    <div>
        <div id="chart">
        
          <h4 className="miniTitle1">Carbon Dioxide </h4>
          <Chart
            
            options={
              {
                chart: {
                  height: 350,
                  type: 'line',
                  dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                  },
                  toolbar: {
                    show: false
                  }
                },
                colors: ['#FEB019'],
                dataLabels: {
                  enabled: true,
                },
                stroke: {
                  curve: 'smooth'
                },
               
                grid: {
                  borderColor: '#e7e7e7',
                  row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                  },
                },
                markers: {
                  size: 1
                },
                xaxis: {
                  categories: time ? time : 0,
                  
                  title: {
                    text: 'Time'

                  },
                  labels: {
                    show: true,
                    rotate: -15,
                    rotateAlways: false,
                  }
                },
                yaxis: {
                  title: {
                    text: 'Carbon Dioxide'
                  },
                  min: 0,
                  max: 2000
                },
                legend: {
                  position: 'top',
                  horizontalAlign: 'right',
                  floating: true,
                  offsetY: -25,
                  offsetX: -5
                }
              }
            }
            series={
              [
                {
                  name: "Co2",
                  data: co2 ? co2 : 0,
                },
              ]
            }
            type="area"
            height={360} 
            width={650}
           
          
          />
        </div>
      </div>
    
  );
}
}

export class LineWaterLevel extends React.Component {
  constructor(){
      super();
      this.state = {
          tableData: []
      }
  }

  componentDidMount(){
      
          const que = query(ref(db, "FarmData"), limitToLast(5));

          onValue(que, (snapshot) => {
              var temps = [];
  
              snapshot.forEach(childSnapshot => {
                  let key = childSnapshot.key;
                  let value = childSnapshot.val();
                  temps.push({"key": key, "value":value});
              });
              //AddAllItemsToTable(temps);
              console.log(temps)
              this.setState({
                  tableData: temps
              });

          });
  
  }

  render(){

      var waterLevel = this.state.tableData.map((row, i) => {
          return row.value.waterLevel
      })


      var time = this.state.tableData.map((row, i) => {
          return row.value.timestamp
      })
  return (
    <div>
        <div id="chart">
        
          <h4 className="miniTitle1">Humidifier Water Level </h4>
          <Chart
            
            options={
              {
                chart: {
                  height: 350,
                  type: 'line',
                  dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                  },
                  toolbar: {
                    show: false
                  }
                },
                colors: ['#1B998B'],
                dataLabels: {
                  enabled: true,
                },
                stroke: {
                  curve: 'smooth'
                },
               
                grid: {
                  borderColor: '#e7e7e7',
                  row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                  },
                },
                markers: {
                  size: 1
                },
                xaxis: {
                  categories: time ? time : 0,
                 
                  title: {
                    text: 'Time'
                  },
                  labels: {
                    show: true,
                    rotate: -15,
                    rotateAlways: false,
                  }
                },
                yaxis: {
                  title: {
                    text: 'Water Level'
                  },
                  min: 0,
                  max: 15
                },
                legend: {
                  position: 'top',
                  horizontalAlign: 'right',
                  floating: true,
                  offsetY: -25,
                  offsetX: -5
                }
              }
            }
            series={
              [
                {
                  name: "Water",
                  data: waterLevel ? waterLevel : 0,
                },
              ]
            }
            type="area"
            height={360} 
            width={650}
           
          
          />
        </div>
      </div>
    
  );
}
}
