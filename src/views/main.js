import React, { Component } from "react";
import { Linking, Button, View } from "react-native";
import "../App.css"
import CPTField from "../components/cptField"
import SearchField from "../components/searchField"
import LinkButton from "../components/linkButton"
//  import ProcedureDescription from "../components/procedureDescription.js"
 
//  import HospitalList from "../components/hospitalList.js"
//  import FilterControl from "../components/filterControl.js/index.js"

export default class Main extends Component{
    render(){
        return(
          
            <View className="verticalContainer">
            {/* <View className="horizontalContainer">  */}
            <View > 
             
              <CPTField/>
              
              <SearchField  />
            </View>
            <LinkButton url={"/results"}/>
              
            
          </View>
        )
    }
}