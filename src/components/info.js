import React, { Component } from "react";
import {  Text, View } from "react-native";
import "../App.css";

export default class Info extends Component{
    render(){
        return(
            <View
            style={{
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center'
                position: 'absolute',
                left:'50%',
                top:'50%',
            }}
            >
            <Text>Info!</Text>
            </View>
        )
    }
}