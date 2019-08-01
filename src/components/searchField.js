import React, { useState } from "react";
import { View, TextInput, Text, TouchableHighlight, Button } from "react-native";
import { DatContext } from "../context/hospDataContext.js";
import "../App.css";

///Search through a google spreadsheet : https://github.com/Iwark/react-native-spreadsheet


function SearchField(props) {
  // const [resultText, updateResultText] = useState("");
  const [searchText, updateSearchText] = useState("");
  const [t,updateTimer] = useState("")
  const [searching, updateSearching] = useState(false);
  const hospContextValue = React.useContext(DatContext);
  let dat = hospContextValue.state.cptDat;

  const { modalClicked } = props;

  var timeout;

  var lastSearchString

  const handleText = val => {
    if (val.length < 4) return;
    if(val === lastSearchString) return;

    lastSearchString = val
    // console.log("clear")
    // clearTimeout(timeout);
    // timeout = setTimeout(()=>{
      hospContextValue.onSearch(val)
    //   searchThroughDat(val)
    // }, 1000);
      updateSearchText(val);
  };

  const updateSearchField =() =>{
    return searchText
  }

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
        { props.displayButton()}
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

          {/* <Text>{'Number of matches : ' + hospContextValue.state.searchResults.length}</Text> */}
          <Button 
            className="procedureSearchbarButton"
            onPress={modalClicked}
            title={'Browse ' + hospContextValue.state.searchResults.length + ' Matches'}
          >
            {/* <Text>***</Text> */}
            
          </Button>
          {/* <Text>text :{JSON.stringify(dat,null,2)}</Text> */}
          {console.log('result object', hospContextValue.state.searchResults[0])}
          <Text>{'Search term : "' + searchText + "\""} </Text>
          <Text>Description : </Text>
          <Text>{JSON.stringify(hospContextValue.state.searchResults[0].CodeDescription, null,2)}</Text>
          
          {/* {console.log("text : " + this.context)} */}
        {/* </View> */}
      </View>
    </View>
    )
  }
}
export default SearchField;
