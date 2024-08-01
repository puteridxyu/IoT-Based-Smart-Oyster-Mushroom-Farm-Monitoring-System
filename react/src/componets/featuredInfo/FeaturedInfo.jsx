import React from 'react';
import "./featuredInfo.css"
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ChaletIcon from '@mui/icons-material/Chalet';
import { CurrentCo2, CurrentHumidity,  CurrentTemperature,  Latitude, Longitude, RealtimeDataHumid } from "../realtimeData";
import { ref, onValue } from 'firebase/database';
import StartFirebase from '../../firebaseConfig/index';
const db = StartFirebase();


export class FeaturedInfo extends React.Component{
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

  render(){
        return (
            
            <div className="featured">
                {this.state.tableData.map((rowd,index)=>{
                return(
                <div className="featuredItem">
                    <div>
                    <span className="featuredTitle">Humidity</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">{rowd.data.humidity}&nbsp;&nbsp;%</span>
                        <span className="featuredMoneyRate">
                            <OpacityIcon className="icon1 humidity"/>
                        </span>
                    </div>
                    <span className="featuredSub">Current Humidity</span>
                    </div>
                    
                </div>
                )})}
                {this.state.tableData.map((rowd,index)=>{
                return(
                <div className="featuredItem">
                    <span className="featuredTitle">Temperature</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">{rowd.data.temperature}&nbsp;&nbsp;°C</span>
                        <span className="featuredMoneyRate">
                            <ThermostatIcon className="icon1 temperature"/>
                        </span>
                    </div>
                    <span className="featuredSub">Current Temperature</span>
                </div>
                )})}
                {this.state.tableData.map((rowd,index)=>{
                return(
                <div className="featuredItem">
                    <span className="featuredTitle">CO2 Level</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">{rowd.data.co2}&nbsp;&nbsp;ppm</span>
                        <span className="featuredMoneyRate">
                            <CloudQueueIcon className="icon1 CO2"/>
                        </span>
                    </div>
                    <span className="featuredSub">Current Carbon Dioxide</span>
                </div>
                )})}
                {this.state.tableData.map((rowd,index)=>{
                return(
                <div className="featuredItem">
                    <span className="featuredTitle">Condition</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">{rowd.data.farmStatus}</span>
                        <span className="featuredMoneyRate">
                            <ChaletIcon className="icon1 weather"/>
                        </span>
                    </div>
                    <span className="featuredSub">Mushroom House Condition</span>
                </div>
                )})}
            </div>

            
        )
}}
