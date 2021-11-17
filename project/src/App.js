import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import TestPageEx from './pages/TestPageEx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route path="/" exact><User /></Route>
          <Route path="/testEx" ><TestPageEx /></Route>
        </Switch>


      </BrowserRouter>

      

    </div>
  );
}

export default App;
