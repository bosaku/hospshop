import React, { Component } from "react";
import { View, Text } from "react-native";
import "../App.css";
// import CPTField from "../components/cptField";
// import SearchField from "../components/searchField";
import ProcedureDescription from "../components/procedureDescription.js";

import HospitalList from "../components/hospitalList.js";
import FilterControl from "../components/filterControl";
import LocationField from "../components/locationField";
import HospitalPopup from "../components/hospitalPopup";

export default class Results extends Component {
  state = {
    procedureModalOpen: false,
    procedureTitle: "procedure title",
    procedureDescription: "procedure description",

    hospitalModalOpen: false,
    hospitalName: "hospital Name",
    hospitalInfo: "hospital info",
    hospitalLocation: "hospitalLocation"
  };

  hospModalClicked = () => {
    console.log("click...")
    if (!this.state.hospitalModalOpen)
      this.setState({ hospitalModalOpen: true });
    else this.setState({ hospitalModalOpen: false });

    console.log("open modal? : " + this.state.hospitalModalOpen);
  };

  render() {
    return (
      <View>
        <HospitalPopup 
         title={this.state.hospitalName}
         longDescription={this.state.hospitalInfo}
         modalVisible={this.state.hospitalModalOpen}
         modalClicked={this.hospModalClicked}
        />
        <Text className="header">QUICKLY FIND MEDICAL SERVICES NEAR YOU</Text>
        <View className="verticalContainer">
          <LocationField />
          <ProcedureDescription />

          <FilterControl />
          <HospitalList onHospItemClicked={this.hospModalClicked} />
        </View>
      </View>
    );
  }
}
