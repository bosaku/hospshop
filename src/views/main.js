import React, { Component } from "react";
import { Linking, Button, View, Text } from "react-native";
import "../App.css";
import CPTField from "../components/cptField";
import SearchField from "../components/searchField";
import LinkButton from "../components/linkButton";

import Modal from "modal-enhanced-react-native-web";
import ProcedurePopup from "../components/procedurePopup";


//  import ProcedureDescription from "../components/procedureDescription.js"

//  import HospitalList from "../components/hospitalList.js"
//  import FilterControl from "../components/filterControl.js/index.js"

export default class Main extends Component {
  // _renderModalContent = () => (
  //   <View className="procedureModal">
  //     <Text>Hello!</Text>
  //     {/* {this._renderButton("Close", () => this.setState({ visibleModal: null }))} */}
  //   </View>
  // );

  state = {
    procedureModalOpen: false,
    procedureTitle: "procedure title",
    procedureDescription: "procedure description"
  };

  modalClicked = () => {
    if (!this.state.procedureModalOpen)
      this.setState({ procedureModalOpen: true });
    else this.setState({ procedureModalOpen: false });
    console.log("open modal? : " + this.state.procedureModalOpen);
  };

  render() {
    return (
      <View>
        <Text className="header">FIND MEDICAL SERVICES BY CPT CODE OR DESCRIPTION</Text>
      
      <View className="verticalContainer">
        
        <ProcedurePopup
          title={this.state.procedureTitle}
          longDescription={this.state.procedureDescription}
          modalVisible={this.state.procedureModalOpen}
          modalClicked={this.modalClicked}
        />

        <View>
          <CPTField />

          <SearchField modalClicked={this.modalClicked} />
        </View>
        <LinkButton url={"/results"} />
      </View>
      </View>
    );
  }
}
