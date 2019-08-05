import React, { useEffect, } from "react";
import { View, Text, Button } from "react-native";
import Modal from "modal-enhanced-react-native-web";
import "../App.css";
import { DatContext } from "../context/hospDataContext.js";


///https://codesandbox.io/s/kxmx8w08jv <---- modal stuffs

function ProcedurePopup(props) {
  const context = React.useContext(DatContext);

  useEffect(() => {
  }, [context.state.singleResult]);

  const pressPrevious = () => {
    context.selectPrevious();
  };

  const pressNext = () => {
    context.selectNext();
  };

 
  const _renderModalContent = (title, longDescription) => (
    <View className={"procedureModalOuter"}>
      <Button onPress={pressPrevious} title={"Previous Procedure"} />
      <View className="procedureModalInner">
        <Text>{title}</Text>
        <Text>{longDescription}</Text>
        {/* {this._renderButton("Close", () => this.setState({ visibleModal: null }))} */}
      </View>
      <Button onPress={pressNext} title={"Next Procedure"} />
    </View>
  );

  const clickModal = () => {
    context.procedureModOpen(false);
  };


  if(context.state.singleResult)
  return (
    <View>
      <Modal
        isVisible={context.state.procedureModalClicked}
        
        onBackdropPress={clickModal}
      >
        {_renderModalContent(
          context.state.singleResult.CPTCodes,
          context.state.singleResult.CodeDescription
        )}
      </Modal>
    </View>
  );
  else return null
}
export default ProcedurePopup;
