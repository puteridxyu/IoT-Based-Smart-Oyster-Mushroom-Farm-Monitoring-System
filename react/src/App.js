import "./App.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import List from "./pages/list/List";
import Analytic from "./pages/analytic/Analytic";
import GraphCo2 from "./pages/graph/GraphCo2";
import GraphWaterLev from "./pages/graph/GraphWaterLev";
import GraphHumidity from "./pages/graph/GraphHumidity";
import GraphTemperature from "./pages/graph/GraphTemperature";
import { Realtime } from "./pages/profile/Test";
import Login from "./pages/Login/Login";
import Home2 from "./pages/home/Home3";

function App() {
  return (
    
    <Router>

        
       <div className="container3">
        <Routes>

          <Route path="/"
            element={<Login/>} />

          <Route path="/home"
            element={<Home2/>} />


          <Route path="/list"
            element={<List/>}/>

          <Route path="/analytic"
            element={<Analytic/>}/> 
        
          <Route path="/graph"
            element={<GraphTemperature/>}/>

          <Route path="/graphTemperature"
            element={<GraphTemperature/>}/>

          <Route path="/graphHumidity"
            element={<GraphHumidity/>}/>

          <Route path="/graphCo2"
            element={<GraphCo2/>}/>

          <Route path="/graphWaterLevel"
            element={<GraphWaterLev/>}/>

          <Route path="/test"
            element={<Realtime/>} />

        </Routes>
       </div>
    </Router>
    
  );
}

export default App;
