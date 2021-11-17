// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import User from "./components/User";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <User />
        


      </BrowserRouter>

      

    </div>
  );
}

export default App;
