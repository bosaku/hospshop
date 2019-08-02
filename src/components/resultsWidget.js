import React, { useState } from "react";
import { View, TextInput, Text, TouchableHighlight, Button } from "react-native";
import { DatContext } from "../context/hospDataContext.js";

function ResultsWidget(props) {
    const hospContextValue = React.useContext(DatContext);

    const clickModal = () => {

    }

    return(
<View>
    <Button
    className="procedureSearchbarButton"
    // onPress={modalClicked}
    // onPress={hospContextValue.state.procedureModalClicked}
    onPress={clickModal}
    title={
      "Browse " +
      hospContextValue.state.searchResults.length +
      " Matches"
    }
  >
  </Button>
  
  {console.log(
    "result object",
    hospContextValue.state.searchResults[0]
  )}
  <Text>{'Search term : "' + hospContextValue.state.searchTerm + '"'} </Text>
  <Text>Description : </Text>
  <Text>
    {JSON.stringify(
      hospContextValue.state.searchResults[0].CodeDescription,
      null,
      2
    )}
  </Text>
  </View>
    )
    
}

export default ResultsWidget