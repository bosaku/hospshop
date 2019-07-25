
import React, { Component } from "react";
import { Linking, Button, View } from "react-native";

// import React, 
// { Component, 
//     Button, 
//     View
//  } from 'react';
// import { Linking } from "react-native";
//import "../App.css";

export default class LinkButton extends Component {

     onPress = () => {
        this.goToURL()
      };
  
      goToURL = () => {
        const { url } = this.props;
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL(this.props.url);
          } else {
            console.log("Don't know how to open URI: " + this.props.url);
          }
        })}

  render() {

      return (
          
        <View>
          <Button
            onPress={this.onPress}
            title="Find a hospital"
            color="#841584"
            accessibilityLabel="Click me to filter by location"
          />
        </View>
      )
    }
  }

  
