import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableHighlight,
  Button
} from "react-native";
import { DatContext } from "../context/hospDataContext.js";

function ResultsWidget(props) {
  const context = React.useContext(DatContext);

  const clickModal = () => {
    context.procedureModOpen(true)
    console.log("click modal")
  };

  return (
    <View className="textInputBorder">
      <Button
        className="procedureSearchbarButton"
        // onPress={modalClicked}
        // onPress={hospContextValue.state.procedureModalClicked}
        onPress={clickModal}
        title={
          "Browse " + context.state.searchResults.length + " Matches"
        }
      />

      {/* {console.log("result object", context.state.searchResults[0])} */}
      <Text className="textWLessPadding">
        {'Search term : "' + context.state.searchTerm + '"'}{" "}
      </Text>
      {/* <Text className="textWLessPadding">Description : </Text> */}
      <Text className="textWLessPadding">
        {'Description : ' + JSON.stringify(
          context.state.searchResults[0].CodeDescription,
          null,
          2
        )}
      </Text>
    </View>
  );
}

export default ResultsWidget;
