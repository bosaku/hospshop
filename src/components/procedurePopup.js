import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Modal from "modal-enhanced-react-native-web";
import "../App.css";
import { DatContext } from "../context/hospDataContext.js";


///https://codesandbox.io/s/kxmx8w08jv <---- modal stuffs

class ProcedurePopup extends Component {
  state = {
    resultIndex: 0,
    cptCode:this.props.title,
    description:this.props.longDescription
  };

  pressPrevious=()=>{
    if(!this.context.state.searchResults)return;
    if(this.state.resultIndex > 0)
    this.state.resultIndex = this.state.resultIndex -1
    else 
    this.state.resultIndex = this.context.state.searchResults.length-1

    this.updateVals()
  }

  pressNext= () =>{
    if(!this.context.state.searchResults)return;
    
    if(this.state.resultIndex < this.context.state.searchResults.length-1){
      this.state.resultIndex = this.state.resultIndex +1
    }
    else {
      this.state.resultIndex = 0
    }
    
    this.updateVals()
  }

  updateVals() {
    this.setState({
      cptCode:this.context.state.searchResults[this.state.resultIndex].CPTCodes,
      description:this.context.state.searchResults[this.state.resultIndex].CodeDescription
    })
  }
  _renderModalContent = (title, longDescription) => (
    <View className={"procedureModalOuter"}>
      <Button 
      onPress={this.pressPrevious}
      title={"Previous Procedure"}
      />
      <View className="procedureModalInner">
        <Text>{title}</Text>
        <Text>{longDescription}</Text>
        {/* {this._renderButton("Close", () => this.setState({ visibleModal: null }))} */}
      </View>
      <Button 
       onPress={this.pressNext}
       title={"Next Procedure"}
      />
    </View>
  );

  render() {
    const { modalClicked } = this.props;

    //  const { modalVisible } = this.props.modalVisible;
    //  console.log("modal visible? : " + this.props.modalVisible)
    return (
      <View>
        <Modal
          isVisible={this.props.modalVisible}
          //onBackdropPress={() => this.setState({ visibleModal: null })}onBackdropPress={}
          onBackdropPress={modalClicked}
        >
          {this._renderModalContent(
            this.state.cptCode,
            this.state.description
          )}
        </Modal>
      </View>
    );
  }
}

ProcedurePopup.contextType = DatContext;

export default ProcedurePopup;
