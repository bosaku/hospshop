import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableHighlight,
  Button
} from "react-native";
import { DatContext } from "../context/hospDataContext.js";
import "../App.css";

///Search through a google spreadsheet : https://github.com/Iwark/react-native-spreadsheet

function SearchField(props) {
  // const [resultText, updateResultText] = useState("");
  const [searchText, updateSearchText] = useState("");
  // const [t, updateTimer] = useState("");
  // const [searching, updateSearching] = useState(false);
  const hospContextValue = React.useContext(DatContext);
  let dat = hospContextValue.state.cptDat;

  const { modalClicked } = props;

  var lastSearchString;

  useEffect(() => {
    if(searchText.length <= 3 ) return
    if (searchText === lastSearchString) return;

    lastSearchString = searchText;

    var timeout = setTimeout(() => {
      console.log("running search")
      hospContextValue.onSearch(searchText);
      //   searchThroughDat(val)
    }, 1000);
    return () => clearTimeout(timeout);
  }, [searchText]);

  const handleText = val => {
    updateSearchText(val);
  };

  const updateSearchField = () => {
    return searchText;
  };

  if (hospContextValue.state.searchResults.length <= 0)
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
            {/* {console.log('context :' , hospContextValue)} */}
            {/* {console.log('props :' , props)} */}
          </View>
        </View>
      </View>
    );
  else {
    return (
      <View>
        {props.displayButton()}
        <Text className="inputFieldTitle">Procedure or Diagnosis Search</Text>

        <View className="textInputBorder">
          {/* <View className="horizontalFlexContainer"> */}
          <TextInput
            placeholder="Procedure Description Search"
            className="inputField"
            onChangeText={val => {
              handleText(val);
            }}
            value={updateSearchField()}
          />

          <Button
            className="procedureSearchbarButton"
            onPress={modalClicked}
            title={
              "Browse " +
              hospContextValue.state.searchResults.length +
              " Matches"
            }
          />

          {/* {console.log(
            "result object",
            hospContextValue.state.searchResults[0]
          )} */}
          <Text>{'Search term : "' + searchText + '"'} </Text>
          <Text>Description : </Text>
          <Text>
            {JSON.stringify(
              hospContextValue.state.searchResults[0].CodeDescription,
              null,
              2
            )}
          </Text>
        </View>
      </View>
    );
  }
}
export default SearchField;
