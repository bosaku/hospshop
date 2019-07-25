import React, { Component } from "react";
import {  Text } from "react-native";
import "../App.css";
import ListItem from "./hospListItem"

export default class HospitalList extends Component{
    render(){
        return(
            <ListItem>List of Hospitals</ListItem>
        )
    }
}