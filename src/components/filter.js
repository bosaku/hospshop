import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Filter extends Component {
    
    render = () =>
    (
        <View style={this.props.style}>
            <Text style={styles.title}>Filter</Text>
        </View>
    );   
}

const styles = StyleSheet.create({
    filter:{
        backgroundColor:"#62B1B3",
        height:50,
        borderRadius: 5,
        borderWidth: 10,
        borderColor:'transparent',
      },
      title:{
        fontSize:50,
        justifyContent:'top'
      }
});