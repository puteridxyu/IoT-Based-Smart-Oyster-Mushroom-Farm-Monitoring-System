import React from 'react';
import './location.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Longitude } from '../realtimeData';

import StartFirebase from "../../firebaseConfig/index";
import {ref, onValue, limitToLast, query} from 'firebase/database';

const db = StartFirebase();

export class Location extends React.Component{
    
    
  constructor(){
      super();
      this.state = {
          tableData: []
      }
  }

  componentDidMount(){
      const dbRef  = query(ref(db, 'FarmLocation'), limitToLast(1)  );

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
        <div>{this.state.tableData.map((row,index)=>{
          return(
            <div className="location">
            <div className='tooltipMapTitle'>
            <h3 className="locationTitle">Mushroom House Location</h3>
            </div>
           
            <MapContainer center={[3.5007, 103.3901]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[3.5007, 103.3901]}>
                <Popup>
                  <h5 className='tooltipMapTitle'>Mushroom House</h5>
                  <span tooltipMapLatitude>Latitude : {row.data.latitude}° N </span>
                  <br></br>
                  <span tooltipMapLatitude>Longitude : {row.data.longitude}° E </span>
                  <br /> 
                  
                </Popup>
              </Marker>
            </MapContainer>
            </div>


                           
          )
        })}</div>
             
      )
      
  }
  
}


 
