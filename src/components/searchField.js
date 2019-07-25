import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";
import "../App.css";

///Search through a google spreadsheet : https://github.com/Iwark/react-native-spreadsheet

export default class SearchField extends Component{
    render(){
        return(
            <View>
                <Text className="inputFieldTitle">Procedure or Diagnosis Search</Text>
            
            <View className="textInputBorder">
                <TextInput placeholder="Procedure Search" className="inputField"></TextInput>
            </View>
            </View>
        )
    }
}