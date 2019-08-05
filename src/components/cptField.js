import React, { useState, useEffect } from "react";
import { View, TextInput, Text } from "react-native";
import "../App.css";
import { DatContext } from "../context/hospDataContext.js";

function CPTField (props){
  //LOOK INTO CONTROLLED INPUT as shown HERE:
  //https://codesandbox.io/s/amazing-voice-m9pds
  const [searchText, updateSearchText] = useState("");
  
  const context = React.useContext(DatContext);

  var lastSearchString;

  useEffect(() => {
    if (searchText.length <= 4) return;
    if (searchText === lastSearchString) return;

    lastSearchString = searchText;

    var timeout = setTimeout(() => {
      // console.log("running search");
      context.onCodeSearch(searchText);
      //   searchThroughDat(val)
    }, 1000);
    return () => clearTimeout(timeout);
  }, [searchText]);

  const handleText = val => {
    context.state.searchTerm = val;
    updateSearchText(val);
  };
  
    return (
      <View>
        <Text className="inputFieldTitle">Procedure Code (CPT)</Text>

        <View className="textInputBorder">
          <TextInput
            maxLength={5}
            keyboardType='numeric'
            multiline={false}
            onChangeText={val => {
              handleText(val);
            }}
            placeholder={"code"}
            className="inputField"/>
        </View>
      </View>
    );
  
}

export default CPTField
