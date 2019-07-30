import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "../App.css";

//filter demo by Joe: https://jsbin.com/qilowup/edit?js,console

class FilterControl extends Component{
    render(){
        return(
            <View className="filterControlContainer">
                <Text>Filter by </Text>    
                <Text className="italic">Price</Text>
                <Text>, </Text>
                <Text className="italic">cheapest</Text>
                <Text> first.</Text>
            </View>
            
        )
    }
}

export default FilterControl