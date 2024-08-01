import React from 'react';
import Plot from 'react-plotly.js';
import StartFirebase from "../../firebaseConfig/index";
import {ref, onValue} from 'firebase/database';


const db = StartFirebase();

export class Realtime extends React.Component {

  constructor(){
    super();
        this.state = {
            tableData: []
        }
  }
  componentDidMount(){
      const dbRef = ref(db, 'Customer');

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
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 7],
            y: [2, 6, 8],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
         
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
    );
  }
}