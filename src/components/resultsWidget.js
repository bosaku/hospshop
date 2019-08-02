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
    <View>
      <Button
        className="procedureSearchbarButton"
        // onPress={modalClicked}
        // onPress={hospContextValue.state.procedureModalClicked}
        onPress={clickModal}
        title={
          "Browse " + context.state.searchResults.length + " Matches"
        }
      />

      {console.log("result object", context.state.searchResults[0])}
      <Text>
        {'Search term : "' + context.state.searchTerm + '"'}{" "}
      </Text>
      <Text>Description : </Text>
      <Text>
        {JSON.stringify(
          context.state.searchResults[0].CodeDescription,
          null,
          2
        )}
      </Text>
    </View>
  );
}

export default ResultsWidget;
