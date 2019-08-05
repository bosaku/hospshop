import React, { Component } from "react";
import "./App.css";

import { View, Platform } from "react-native";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./views/main";
import Info from "./components/info";
import Results from "./views/results";
// import {HospDataConsumer} from "./context/hospDataContext.js";
///for dimensionality as context throughout app : https://medium.com/@505aaron/a-practical-react-native-problem-solved-with-the-context-api-eecaf2e05202

class App extends Component {

  render() {
    //let filterPercentage = 50;

    return (
      <View>
        {/* <HospDataConsumer> */}
          <View>
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/results" exact component={Results} />
                <Route path="/info" exact component={Info} />
                <Route path="*" component={Main} />{" "}
                {/*  misspelled routes will resolve to Main*/}
              </Switch>
            </BrowserRouter>
          </View>
        {/* </HospDataConsumer> */}
      </View>
    );
  }
}

let hotWrapper = () => () => App;
if (Platform.OS === "web") {
  const { hot } = require("react-hot-loader");
  hotWrapper = hot;
}
export default hotWrapper(module)(App);

// export default hotWrapper(module)(
//   <HospDataProvider>
//     <App />
//   </HospDataProvider>
// );
