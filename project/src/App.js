import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import TestPageEx from "./pages/TestPageEx";
import TestPage from "./pages/TestPage";
import Complete from "./pages/Complete";
import Result from "./pages/Result";
import React from "react";
import UserStore from "./store/UserStore";
import { Container, Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* UserStore로 감싸준 컴포넌트에 [post, setPost] 전달 */}
      <UserStore>
        <Container fixed>
          <Box sx={{ height: "100vh", borderColor: "#00" }}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <User />
                </Route>
                <Route exact path="/testEx">
                  <TestPageEx />
                </Route>
                <Route exact path="/test">
                  <TestPage />
                </Route>
                <Route exact path="/test/complete">
                  <Complete />
                </Route>
                <Route exact path="/result">
                  <Result />
                </Route>
              </Switch>
            </BrowserRouter>
          </Box>
        </Container>
      </UserStore>
    </div>
  );
}

export default App;
