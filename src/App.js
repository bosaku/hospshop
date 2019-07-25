import React, { Component } from "react";
import "./App.css";

import {  View, Platform, Text } from "react-native";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./views/main";
import Info from "./components/info";
import Results from "./views/results"

class App extends Component {
  

  render() {
    //let filterPercentage = 50;

    return (
      <View
    
      >
        <View
        >
          <BrowserRouter>
          <Text className="header" >QUICKLY FIND MEDICAL SERVICES NEAR YOU</Text>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/results" exact component={Results} />
              <Route path="/info" exact component={Info} />
              <Route path="*" component={Main}/>  {/*  misspelled routes will resolve to Main*/}
            </Switch>
          </BrowserRouter>
        </View>
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
