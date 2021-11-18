import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import TestPageEx from './pages/TestPageEx';
import TestPage from './pages/TestPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path="/"><User /></Route>
          <Route exact path="/testEx" ><TestPageEx /></Route>
          <Route exact path="/test" ><TestPage /></Route>

        </Switch>


      </BrowserRouter>

      

    </div>
  );
}

export default App;
