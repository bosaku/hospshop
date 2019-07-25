import React, { Component } from "react";
import {  Text , View} from "react-native";
import "../App.css";
import { ListItem } from 'react-native-elements'

export default class HospitalListItem extends Component{
    render(){
        return(
            <View>
                <ListItem
                    title = "title"
                    subtitle = "subtitle"
                    titleNumberOfLines={0}
                    subtitleNumberOfLines={0}
                />
            </View>
            //<ListItem>List of Hospitals</ListItem>
        )
    }
}