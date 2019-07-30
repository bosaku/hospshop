import React, { useState } from "react";
import { View, TextInput, Text, TouchableHighlight } from "react-native";
import HospDataConsumer from "../context/hospDataContext.js";
import "../App.css";
import { timeout } from "q";

///Search through a google spreadsheet : https://github.com/Iwark/react-native-spreadsheet

function SearchField(props) {
  const [resultText, updateResultText] = useState("");

  let text = this.context;

  const { modalClicked } = props;

  console.log("modal clicked   : " + modalClicked);

  var timeoutId;

  const updateText = val => {
    updateResultText(val);
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      sendSearchString(val);
    }, 2000);
  };

  const sendSearchString = searchString => {
    console.log("val : " + searchString);
  };

  return (
    <View>
      <Text className="inputFieldTitle">Procedure or Diagnosis Search</Text>

      <View className="textInputBorder">
        <View className="horizontalFlexContainer">
          {/* <HospData.Consumer> */}
          {/* {({search,reqSearch})=>( */}
          <TextInput
            placeholder="Procedure Search"
            className="inputField"
            onChangeText={val => {
              updateText(val);
            }}
            //   onChangeText={reqSearch}
          />
          {/* )} */}

          {/* </HospData.Consumer> */}
          <TouchableHighlight
            className="procedureSearchbarButton"
            onPress={modalClicked}
          >
            <Text>***</Text>
          </TouchableHighlight>
          <Text>text :{text}</Text>
          {console.log("text : " + this.context)}
        </View>
      </View>
    </View>
  );
  //   }
}

SearchField.contextType = HospDataConsumer;

function SearchFieldWrapper(props) {
  return (
    //    <SearchField modalClicked={props.modalClicked} />
    <HospDataConsumer>
      {console.log("What have we..?" + props)}
      {data => 
            <SearchField modalClicked={props.modalClicked} dataProp={data} />   
      }
    </HospDataConsumer>
  );
}

export default SearchFieldWrapper;
