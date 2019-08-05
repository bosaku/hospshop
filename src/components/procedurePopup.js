import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Modal from "modal-enhanced-react-native-web";
import "../App.css";
import { DatContext } from "../context/hospDataContext.js";
import { runInThisContext } from "vm";
import { thisExpression } from "@babel/types";

///https://codesandbox.io/s/kxmx8w08jv <---- modal stuffs

class ProcedurePopup extends Component {
  state = {
    resultIndex: 0,
    cptCode: "",
    description: ""
  };

  componentWillReceiveProps(){
    this.updateVals()
  }

  pressPrevious = () => {
    if (!this.context.state.searchResults) return;
    if (this.state.resultIndex > 0)
      this.state.resultIndex = this.state.resultIndex - 1;
    else this.state.resultIndex = this.context.state.searchResults.length - 1;

    this.updateVals();
  };

  pressNext = () => {
    if (!this.context.state.searchResults) return;

    if (this.state.resultIndex < this.context.state.searchResults.length - 1) {
      this.state.resultIndex = this.state.resultIndex + 1;
    } else {
      this.state.resultIndex = 0;
    }

    this.updateVals();
  };

  updateVals() {
    if(!this.context.state.searchResults[this.state.resultIndex]) return;

    this.setState({
      cptCode: this.context.state.searchResults[this.state.resultIndex]
        .CPTCodes,
      description: this.context.state.searchResults[this.state.resultIndex]
        .CodeDescription
    });
  }

  _renderModalContent = (title, longDescription) => (
    <View className={"procedureModalOuter"}>
      <Button onPress={this.pressPrevious} title={"Previous Procedure"} />
      <View className="procedureModalInner">
        <Text>{title}</Text>
        <Text>{longDescription}</Text>
        {/* {this._renderButton("Close", () => this.setState({ visibleModal: null }))} */}
      </View>
      <Button onPress={this.pressNext} title={"Next Procedure"} />
    </View>
  );

  clickModal = () => {
    this.context.procedureModOpen(false);
    console.log("click modal");
  };

  render() {
    // const { modalClicked } = this.props;

    //  const { modalVisible } = this.props.modalVisible;
    //  console.log("modal visible? : " + this.props.modalVisible)
    return (
      <View >
        {console.log("render main ", this.context)}
        <Modal
          isVisible={this.context.state.procedureModalClicked}
          //onBackdropPress={() => this.setState({ visibleModal: null })}onBackdropPress={}
          onBackdropPress={this.clickModal}
        >
          {this._renderModalContent(
            this.state.cptCode,
            this.state.description
            // this.context.state.searchResults[this.resultIndex].CPTCodes,
            // this.context.state.searchResults[this.resultIndex].CodeDescription
          )}
        </Modal>
      </View>
    );
  }
}

ProcedurePopup.contextType = DatContext;

export default ProcedurePopup;
