import React, { Component } from "react";
import { View, Text } from "react-native";
import "../App.css";
import CPTField from "../components/cptField";
import SearchField from "../components/searchField";
import LinkButton from "../components/linkButton";
import { DatContext } from "../context/hospDataContext.js";
import ProcedurePopup from "../components/procedurePopup";
import ResultsWidget from "../components/resultsWidget"

export default class Main extends Component {

  constructor () 
  {
    super()
    this.buttonVisible= false
  }

  state = {
    procedureModalOpen: false,
    // procedureTitle: "procedure title",
    // procedureDescription: "procedure description",
    
  };

  

  modalClicked = () => {
    if (!this.state.procedureModalOpen)
      this.setState({ procedureModalOpen: true });
    else this.setState({ procedureModalOpen: false });
    // console.log("open modal? : " + this.state.procedureModalOpen);
  };

  displayFindHospitalButton(){
    // console.log("visible ? : "+ this.state.buttonVisible)
    // this.setState({
    //   buttonVisible: true
    // });
    this.buttonVisible =true;
  };

  displayResults(){
    if(this.context.state.searchResults)
    return(
      
      <ResultsWidget/>
    )
  }

  render() {
    return (
      <View>
        <Text className="header">
          FIND MEDICAL SERVICES BY CPT CODE OR DESCRIPTION
        </Text>

        <View className="verticalContainer">
          <ProcedurePopup
            title={this.context.procedureTitle}
            longDescription={this.state.procedureDescription}
            modalVisible={this.context.state.procedureModalOpen}
            modalClicked={this.modalClicked}
          />

          <View>
            <CPTField />

            <SearchField
              modalClicked={this.modalClicked}
              displayButton={this.displayFindHospitalButton}
            />
            {this.displayResults()}
            
          </View>
          {/* {console.log("visible ? : "+ this.state.buttonVisible)} */}
          {this.context.state.searchResults.length > 0 && <LinkButton url={"/results"} />}
        </View>
      </View>
    );
  }
}
Main.contextType = DatContext;
