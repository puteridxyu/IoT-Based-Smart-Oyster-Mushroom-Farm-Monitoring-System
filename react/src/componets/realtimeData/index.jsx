import React from "react";
import StartFirebase from "../../firebaseConfig/index";
import {ref, onValue, limitToLast, query} from 'firebase/database';
import { Table } from "react-bootstrap";


const db = StartFirebase();

export class GraphRealTime extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        
            const que = query(ref(db, "FarmData"), limitToLast(10));

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
            return row.value.Temperature
        })

        var watLevel = this.state.tableData.map((row, i) => {
            return row.value.WaterLevel
        })


        var time = this.state.tableData.map((row, i) => {
            return row.value.Timestamps
        })

     

        return(
                <div>
                
                </div>    
        )
    }
}

export class RealtimeData extends React.Component{
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

    render(){
        return(
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Fullname</th>
                        <th>Phone Number</th>
                        <th>Date Of Birth</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.tableData.map((rowd,index)=>{
                        return(
                            <tr>
                                <td>{index}</td>
                                <td>{rowd.key}</td>
                                <td>{rowd.data.Fullname}</td>
                                <td>{rowd.data.Phonenumber}</td>
                                <td>{rowd.data.dateofbirth}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </Table>
        )
    }
}


export class RealtimeData2 extends React.Component{
    constructor(){
        super();
            this.state = {
                tableData: []
            }
    }
    componentDidMount(){
        const dbRef = ref(db, 'FarmData');
    
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
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Timestamp</th>
                        <th>Humidity</th>
                        <th>Temperature</th>
                        <th>Carbon Dioxide</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {this.state.tableData.map((rowd,index)=>{
                        return(
                            <tr>
                                <td>{index}</td>
                                <td>{rowd.data.timestamp}</td>
                                <td>{rowd.data.humidity}</td>
                                <td>{rowd.data.temperature}</td>
                                <td>{rowd.data.co2}</td>
                                
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </Table>
        )
    }
}


export class Humidity extends React.Component{
    constructor(){
        super();
            this.state = {
                tableData: []
            }
    }
    componentDidMount(){
        const dbRef = ref(db, 'FarmData');
    
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
            <Table>
                
                <tbody>
                    {this.state.tableData.map((rowd,index)=>{
                        return(
                            <tr>
                                <td>{rowd.data.Humidity}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </Table>
        )
    }
}


export class CurrentHumidity extends React.Component{
    
    
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef  = query(ref(db, 'FarmData'), limitToLast(1)  );

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
            <div>
                    {this.state.tableData.map((row,index)=>{
                        return(
                            <tr>
                             <td>{row.data.humidity}</td>
                            </tr>
                        )
                    })}
               </div>
        )
        
    }
    
}

export class CurrentTemperature extends React.Component{
    
    
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef  = query(ref(db, 'FarmData'), limitToLast(1)  );

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
            <div>
                    {this.state.tableData.map((row,index)=>{
                        return(
                            <tr>
                             <td>{row.data.temperature}</td>
                            </tr>
                        )
                    })}
               </div>
        )
        
    }
    
}

export class CurrentCo2 extends React.Component{
    
    
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef  = query(ref(db, 'FarmData'), limitToLast(1)  );

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
            <div>
                    {this.state.tableData.map((row,index)=>{
                        return(
                            <tr>
                             <td>{row.data.co2}</td>
                            </tr>
                        )
                    })}
               </div>
        )
        
    }
    
}

//get longitude
export class Longitude extends React.Component{
    
    
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
            <div>
                    {this.state.tableData.map((row,index)=>{
                        return(
                            
                             <td>{row.data.longitude}</td>

                        )
                    })}
               </div>
        )
        
    }
    
}

//get latitude
export class Latitude extends React.Component{
    
    
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
            <div>
                    {this.state.tableData.map((row,index)=>{
                        return(
                            
                             <p>{row.data.latitude}</p>

                        )
                    })}
               </div>
        )
        
    }
    
}


//get 
export class CurrentTimeStamp extends React.Component{
    
    
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
            <div>
                    {this.state.tableData.map((row,index)=>{
                        return(
                            
                             <td>{row.data}</td>

                        )
                    })}
               </div>
        )
        
    }
    
}