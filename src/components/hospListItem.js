import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import "../App.css";


export default class HospitalListItem extends Component {
  render() {

    

    
    return (
      <View className="hospitalListItemOuter">
        <TouchableHighlight
        onPress={this.props.onHospItemClicked}
        // onPress={()=> {
        //     console.log("click")   
        //     // modalClicked =true 
        //    }}
        className="procedureSearchbarButton"
        >
          <View className="horizontalFlexContainer">
            <View className="hospitalListItemBorder">
              <Text className="centeredText">
                Moderately Long Long Hospital Name
              </Text>
              <View className="hospitalListTitleRatingContainer">
                <Text>Rating</Text>
                <Text> 5 stars</Text>
              </View>
            </View>

            <View className="hospitalListItemBorder">
              <Text className="hospitalListItemPriceText">Price Widget</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>

      // <ListItem>List of Hospitals</ListItem>
    );
  }
}
