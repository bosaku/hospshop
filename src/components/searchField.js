import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
} from "react-native";
import { DatContext } from "../context/hospDataContext.js";
import "../App.css";

///Search through a google spreadsheet : https://github.com/Iwark/react-native-spreadsheet

function SearchField(props) {
  
  const [searchText, updateSearchText] = useState("");
  
  const context = React.useContext(DatContext);

  var lastSearchString;

  useEffect(() => {
    if (searchText.length <= 3) return;
    if (searchText === lastSearchString) return;

    lastSearchString = searchText;

    var timeout = setTimeout(() => {
      console.log("running search");
      context.onSearch(searchText);
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
      <Text className="inputFieldTitle">Procedure or Diagnosis Search</Text>

      <View className="textInputBorder">
        <View className="horizontalFlexContainer">
          <TextInput
            placeholder="Enter a description"
            className="inputField"
            
            onChangeText={val => {
              handleText(val);
            }}
          />
        </View>
      </View>
    </View>
  );
}
export default SearchField;
