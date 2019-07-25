import React, { Component } from "react";
import {  View } from "react-native";
import "../App.css";
// import CPTField from "../components/cptField";
// import SearchField from "../components/searchField";
 import ProcedureDescription from "../components/procedureDescription.js"

 import HospitalList from "../components/hospitalList.js"
 import FilterControl from "../components/filterControl"
 import LocationField from "../components/locationField"

export default class Results extends Component {
  render() {
    return (
      <View className="verticalContainer">
        <LocationField></LocationField>
        <ProcedureDescription/>

        <FilterControl />
            <HospitalList />
      </View>
    );
  }
}
