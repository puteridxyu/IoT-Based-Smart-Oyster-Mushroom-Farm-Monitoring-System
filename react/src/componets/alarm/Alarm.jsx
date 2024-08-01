import React from 'react';
import "./alarm.css"

import StartFirebase from "../../firebaseConfig/index";
import {ref, onValue, remove, limitToLast, query} from 'firebase/database';
import { Table, button } from "react-bootstrap";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const db = StartFirebase();


export class Alarm extends React.Component{
  constructor(){
      super();
          this.state = {
              tableData: []
          }
  }
  componentDidMount(){
      const dbRef = ref(db, 'Alarm');
  
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
        <div className="alarm">
        <h3 className="alarmTitle">Carbon Dioxide Alarm</h3>
     
          <Table>
              <thead>
                  <tr>
                      <th className='ths'>Bil</th>
                      <th className='ths'>Timestamp</th>
                      <th className='ths'>Carbon Dioxide</th>
                      <th className='ths'>Status</th>
                      <th className='ths'></th>
                      
                  </tr>
              </thead>

              <tbody>
                  {this.state.tableData.map((rowd,index)=>{
                      return(
                          <tr>
                              <td className='tds'>{index}</td>
                              <td className='tds'>{rowd.data.timestamp}</td>
                              <td className='tds'>{rowd.data.co2} ppm</td>
                              <td className='tds'>{rowd.data.co2Status}</td>
                              <td className='tds'>
                              
                                <IconButton aria-label="delete" 
                                  
                                  size="small">
                                 <DeleteIcon fontSize="small" color="error" 
                                
                                 />
                               </IconButton>
                              </td>
                              
                          </tr>
                      )
                  }
                  )}
              </tbody>
          </Table>
        </div>
      )
  }
}




