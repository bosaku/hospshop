import React, { Component } from "react";
import { View, Text } from "react-native";
import "../App.css";

export default class ProcedureDescription extends Component{
state={
    title:"procedure short name",
    longName:"procedure long description procedure long description procedure long description "

}

    render(){
        return(
            <View className="procedureDescriptionContainer"> 
                <Text className="procedureShortName">{this.state.title}</Text>
                <Text className="procedureDescription">{this.state.longName}</Text>
            </View>
        )
    }
}