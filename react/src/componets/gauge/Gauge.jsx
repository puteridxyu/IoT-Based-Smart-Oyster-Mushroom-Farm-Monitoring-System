import React from "react";
import ReactApexChart from 'react-apexcharts'
import { useState } from "react"
import { ref, onValue } from 'firebase/database';
import StartFirebase from '../../firebaseConfig/index';
const db = StartFirebase();


export class GaugeHumidity extends React.Component{
    constructor(props) {
          super(props);
              this.state = {
                  tableData: [],
                  options: {
                    chart: {
                      height: 350,
                      type: 'radialBar',
                      offsetY: -10
                    },
                    colors: ['#008FFB'],
                    plotOptions: {
                      radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        dataLabels: {
                          name: {
                            fontSize: '16px',
                            color: undefined,
                            offsetY: 120
                          },
                          value: {
                            offsetY: 76,
                            fontSize: '22px',
                            color: undefined,
                            formatter: function (val) {
                              return val + "%";
                            }
                          }
                        }
                      }
                    },
                    fill: {
                      type: 'gradient',
                      gradient: {
                          shade: 'dark',
                          shadeIntensity: 0.15,
                          inverseColors: false,
                          opacityFrom: 1,
                          opacityTo: 1,
                          stops: [0, 50, 65, 91]
                      },
                    }, 
                    stroke: {
                      dashArray: 4
                    },
                    labels: ['Current Humidity'],
                  },
              };
    }
    componentDidMount(){
        const dbRef = ref(db, 'DailyReport');
    
        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key":keyName, "data": data});
            });
            this.setState({tableData: records});

        });
    }
    render(){
        return(
              <div id="chart">
                <br></br>
                <br></br>
                {this.state.tableData.map((rowd,index)=>{
                return(
                  <ReactApexChart options={this.state.options} series={[rowd.data.humidity]} type="radialBar" height={350} />
                )})}
              </div>
        )
    }

}

export class GaugeTemperature extends React.Component{
    constructor(props) {
          super(props);
              this.state = {
                  tableData: [],
                  options: {
                    chart: {
                      height: 350,
                      type: 'radialBar',
                      offsetY: -10
                    
                    },
                    colors: ['#FF4560'],
                    plotOptions: {
                      radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        dataLabels: {
                          name: {
                            fontSize: '16px',
                            color: undefined,
                            offsetY: 120
                          },
                          value: {
                            offsetY: 76,
                            fontSize: '22px',
                            color: undefined,
                            formatter: function (val) {
                              return val + "°C";
                            }
                          }
                        }
                      }
                    },
                    fill: {
                      type: 'gradient',
                      gradient: {
                          shade: 'dark',
                          shadeIntensity: 0.15,
                          inverseColors: false,
                          opacityFrom: 1,
                          opacityTo: 1,
                          stops: [0, 50, 65, 91]
                      },
                    }, 
                    stroke: {
                      dashArray: 4
                    },
                    labels: ['Current Temperature'],
                  },
              };
    }
    componentDidMount(){
        const dbRef = ref(db, 'DailyReport');
    
        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key":keyName, "data": data});
            });
            this.setState({tableData: records});

        });
    }
    render(){
        return(
              <div id="chart">
                <br></br>
                <br></br>
                {this.state.tableData.map((rowd,index)=>{
                return(
                  <ReactApexChart options={this.state.options} series={[rowd.data.temperature]} type="radialBar" height={350} />
                )})}
              </div>
        )
    }

}

export class GaugeCo2 extends React.Component{
    constructor(props) {
          super(props);
              this.state = {
                  tableData: [],
                  options: {
                    chart: {
                      height: 350,
                      type: 'radialBar',
                      offsetY: -10
                    },
                    colors: ['#e09d17'], 
                    plotOptions: {
                      radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        dataLabels: {
                          name: {
                            fontSize: '16px',
                            color: undefined,
                            offsetY: 120
                          },
                          value: {
                            offsetY: 76,
                            fontSize: '22px',
                            color: undefined,
                            formatter: function (val) {
                              return val + " ppm";
                            }
                          }
                        }
                      }
                    },
                    fill: {
                      type: 'gradient',
                      gradient: {
                          shade: 'dark',
                          shadeIntensity: 0.15,
                          inverseColors: false,
                          opacityFrom: 1,
                          opacityTo: 1,
                          stops: [0, 50, 65, 91]
                      },
                    }, 
                    stroke: {
                      dashArray: 4
                    },
                    labels: ['Current Co2'],
                  },
              };
    }
    componentDidMount(){
        const dbRef = ref(db, 'DailyReport');
    
        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key":keyName, "data": data});
            });
            this.setState({tableData: records});

        });
    }
    render(){
        return(
              <div id="chart">
                <br></br>
                <br></br>
                {this.state.tableData.map((rowd,index)=>{
                return(
                  <ReactApexChart options={this.state.options} series={[rowd.data.co2]} type="radialBar" height={350} />
                )})}
              </div>
        )
    }

}


export class GaugeWaterLevel extends React.Component{
    constructor(props) {
          super(props);
              this.state = {
                  tableData: [],
                  options: {
                    chart: {
                      height: 350,
                      type: 'radialBar',
                      offsetY: -10
                    },
                    colors: ['#1B998B'], 
                    plotOptions: {
                      radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        dataLabels: {
                          name: {
                            fontSize: '16px',
                            color: undefined,
                            offsetY: 120
                          },
                          value: {
                            offsetY: 76,
                            fontSize: '22px',
                            color: undefined,
                            formatter: function (val) {
                              return val + " cm";
                            }
                          }
                        }
                      }
                    },
                    fill: {
                      type: 'gradient',
                      gradient: {
                          shade: 'dark',
                          shadeIntensity: 0.15,
                          inverseColors: false,
                          opacityFrom: 1,
                          opacityTo: 1,
                          stops: [0, 50, 65, 91]
                      },
                    }, 
                    stroke: {
                      dashArray: 4
                    },
                    labels: ['Current Water Level'],
                  },
              };
    }
    componentDidMount(){
        const dbRef = ref(db, 'DailyReport');
    
        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key":keyName, "data": data});
            });
            this.setState({tableData: records});

        });
    }
    render(){
        return(
              <div id="chart">
                <br></br>
                <br></br>
                {this.state.tableData.map((rowd,index)=>{
                return(
                  <ReactApexChart options={this.state.options} series={[rowd.data.waterLevel]} type="radialBar" height={350} />
                )})}
              </div>
        )
    }

}

