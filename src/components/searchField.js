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

  const searchInput = React.createRef();

  useEffect(() => {
    if (searchText.length <= 3) return;
    if (searchText === lastSearchString) return;

    lastSearchString = searchText;

    var timeout = setTimeout(() => {
      console.log("running search");
      context.onSearch(searchText);
      
    }, 1000);
    return () => clearTimeout(timeout);
  }, [searchText]);

  useEffect(()=>{
    console.log("clear Desc called")
    if(context.state.clearDesc)
      this.searchInput.clear()
  },[context.state.clearDesc])

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
            ref={comp => { this.searchInput = comp; }}
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
