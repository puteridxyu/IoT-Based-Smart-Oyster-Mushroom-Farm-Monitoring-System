import React from 'react';
import "./dailyReport.css"

import StartFirebase from "../../firebaseConfig/index";
import {ref, onValue, limitToLast, query} from 'firebase/database';
import { Table } from "react-bootstrap";
import { CurrentCo2, CurrentHumidity, CurrentTemperature, CurrentTimeStamp } from '../realtimeData';
import { button } from 'bootstrap';
import Button from '@mui/material/Button';
import { width } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const db = StartFirebase();


export class DailyReport extends React.Component{
  constructor(){
      super();
          this.state = {
              tableData: []
          }
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

  downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob(
        [["Timestamp : "]   ,document.getElementById('times').value,
         ["   |   Farm condition : "] ,document.getElementById('fs').value,
         ["   |   Humidity value : "]   ,document.getElementById('hv').value,
         ["%  status : "] ,document.getElementById('hs').value,
         ["   |   Temperature value : "] ,document.getElementById('tv').value,
         ["°C  status : "] ,document.getElementById('ts').value,
         ["   |   Co2 value : "] ,document.getElementById('cv').value,
         [" ppm  status : "] ,document.getElementById('cs').value,
         ["   |   Humidifier value : "] ,document.getElementById('ds').value,
         ["   |      "]
        ], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "MushroomHouseReport.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  render(){
      return(
        <div>
        <h3 className="miniTitle">Condition Report</h3>
        {this.state.tableData.map((rowd,index)=>{
            return(
                <div>
                <span className='timestampreport'> Last Updated &nbsp;: &nbsp;{rowd.data.timestamp}</span>
                <br></br><br></br>
                <table >
                    
                    <tbody>
                        <tr>
                        
                        <td scope="row">Humidity</td>
                        <td>:&nbsp; &nbsp; {rowd.data.humidityStatus}</td>
                        <td className='reporttabletd'>&nbsp; ( {rowd.data.humidity}% ) </td>
                        </tr>
                        <tr>
                        <td scope="row">Temperature</td>
                        <td>:&nbsp; &nbsp; {rowd.data.temperatureStatus}</td>
                        <td className='reporttabletd'>&nbsp; ({rowd.data.temperature}°C)</td>
                        </tr>
                        <tr>
                        <td scope="row">Co2</td>
                        <td>:&nbsp; &nbsp; {rowd.data.co2Status}</td>
                        <td className='reporttabletd'>&nbsp; (&nbsp;{rowd.data.co2} ppm )</td>
                        </tr>
                        <tr>
                        <td scope="row">Humidifier</td>
                        <td >:&nbsp; &nbsp; {rowd.data.humidifierStatus}</td>
                        <td >&nbsp;</td>
                        </tr>
                        <tr>
                        <td scope="row"></td>
                        <td >&nbsp;</td>
                        <td>&nbsp;</td>
                        </tr>
                        <tr>
                        <td scope="row"></td>
                        <td >&nbsp;</td>
                        <td>&nbsp;</td>
                        </tr>
                        <tr>
                        <td scope="row"></td>
                        <td >
                        </td>
                        <td>
                            
                        </td>
                        </tr>
                        
                    </tbody>
                    </table>
                    
                    <Button 
                                onClick={this.downloadTxtFile}
                                variant="outlined" 
                                startIcon={<FileDownloadIcon />}
        
                                >Download
                            </Button>

                <input id="times" value="2012-12-12 10:12:12" type="hidden" />

                <input id="hs" value={rowd.data.humidityStatus} type="hidden"/>
                <input id="ts" value={rowd.data.temperatureStatus} type="hidden"/>
                <input id="cs" value={rowd.data.co2Status} type="hidden"/>
                <input id="ds" value={rowd.data.humidifierStatus} type="hidden"/>
                <input id="fs" value={rowd.data.farmStatus} type="hidden" disable/>
                <input id="hv" value={rowd.data.humidity} type="hidden" disable/>
                <input id="tv" value={rowd.data.temperature} type="hidden" disable/>
                <input id="cv" value={rowd.data.co2} type="hidden" disable/>
                <br></br>
                <div>
                
                </div>
                </div>
        
        )})}
        </div>
      )
  }
}

