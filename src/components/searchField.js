import React, { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableHighlight } from "react-native";
import { DatContext } from "../context/hospDataContext.js";
import "../App.css";
import { match } from "minimatch";

///Search through a google spreadsheet : https://github.com/Iwark/react-native-spreadsheet

function SearchField(props) {
   const [resultText, updateResultText] = useState("");
  const [searchText, updateSearchText] = useState("");
   const hospContextValue = React.useContext(DatContext);

  let dat = hospContextValue.cptDat;

  

  const { modalClicked } = props;

  const handleText = val => {
    if(val.length < 4) return;

    setTimeout()

    updateSearchText(val);
    searchThroughDat(val);
  };

  const searchThroughDat = searchString => {
    const matches = dat.filter(item => {
      return item.CodeDescription.toLowerCase().includes(searchString);
    });
    

    console.log("results for search ", searchString, ": ", matches);



    updateResultText(matches)
  };

  return (
    <View>
      <Text className="inputFieldTitle">Procedure or Diagnosis Search</Text>

      <View className="textInputBorder">
        <View className="horizontalFlexContainer">
          
          
          <TextInput
            placeholder="Procedure Description Search"
            className="inputField"
            onChangeText={(val) => {
              handleText(val);
            }}
            //  value={resultText}
          />


          <Text>{("#R", resultText.length)}</Text>
          <TouchableHighlight
            className="procedureSearchbarButton"
            onPress={modalClicked}
          >
            <Text>***</Text>
          </TouchableHighlight>
          {/* <Text>text :{JSON.stringify(dat,null,2)}</Text> */}
          <Text>text :{JSON.stringify(resultText, null, 2)}</Text>
          {console.log("text : " + this.context)}
        </View>
      </View>
    </View>
  );
}
export default SearchField;
