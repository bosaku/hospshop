import React, { Component } from "react";
import { View, Text } from "react-native";
import "../App.css";
import CPTField from "../components/cptField";
import SearchField from "../components/searchField";
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
  };

  

  modalClicked = () => {
    if (!this.state.procedureModalOpen)
      this.setState({ procedureModalOpen: true });
    else this.setState({ procedureModalOpen: false });
  };

  displayFindHospitalButton(){
    this.buttonVisible =true;
  };

  displayResults(){
    if(this.context.state.searchResults)
    return(
      <ResultsWidget/>
    )
    else if(this.context.state.searchFailed)
    {
      return(
        <Text className={"textWLessPadding"}>This search has not returned any procedures.</Text>
      )
    }
  }

  render() {
    return (
      <View>
        <Text className="header">
          SEARCH FOR CATEGORY I CPT CODES
        </Text>

        <View className="verticalContainer">
          {/* {console.log('render main ' , this.context.state.procedureModalOpen)} */}
          <ProcedurePopup
            title={this.context.procedureTitle}
            longDescription={this.state.procedureDescription}
            // modalVisible={this.context.state.procedureModalOpen}
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
          
        </View>
      </View>
    );
  }
}
Main.contextType = DatContext;
