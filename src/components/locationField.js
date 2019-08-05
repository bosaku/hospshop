import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";
import "../App.css";

export default class LocationField extends Component {
  //LOOK INTO CONTROLLED INPUT as shown HERE:
  //https://codesandbox.io/s/amazing-voice-m9pds

  state = {
    inputText: ""
  };

  render() {
    return (
      <View>
        <Text className="inputFieldTitle">Location</Text>

        <View className="textInputBorder">
          <TextInput
            maxLength={5}
            multiline={false}
            // textAlign="center"
            placeholder={"code"}
            className="inputField"/>
        </View>
      </View>
    );
  }
}

