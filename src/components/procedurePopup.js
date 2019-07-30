import React, { Component } from "react";
import { View, Text } from "react-native";
import Modal from "modal-enhanced-react-native-web";
import "../App.css";


///https://codesandbox.io/s/kxmx8w08jv <---- modal stuffs

class ProcedurePopup extends Component {
 
  _renderModalContent = (title,longDescription) => (
    <View className="procedureModal">
      <Text>{title}</Text>
      <Text>{longDescription}</Text>
      {/* {this._renderButton("Close", () => this.setState({ visibleModal: null }))} */}
    </View>
  );
    
  render() {
    const { modalClicked } = this.props;
    
    
    //  const { modalVisible } = this.props.modalVisible;
     console.log("modal visible? : " + this.props.modalVisible)
    return (
      <View>
        <Modal
          isVisible={this.props.modalVisible}
          //onBackdropPress={() => this.setState({ visibleModal: null })}onBackdropPress={}
          onBackdropPress={(modalClicked)}
        >
          {this._renderModalContent(this.props.title, this.props.longDescription)}
        </Modal>
      </View>
    );
  }
}

export default ProcedurePopup;
