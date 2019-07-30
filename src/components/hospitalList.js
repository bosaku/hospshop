import React, { Component } from "react";
import { Text, View, ListView, FlatList } from "react-native";
import "../App.css";

 import HospitalListItem from "./hospListItem"


export default class HospitalList extends Component {

  constructor() {
    // console.Log("hi")
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      data: ds.cloneWithRows(["a", "b"], ["x", "y"], ["c", "d"], ["e", "f"])
    };
  }

  _renderItem = ({item}) => (
     <HospitalListItem 
     onHospItemClicked={this.props.onHospItemClicked}
        // onHospItemClicked={()=>{
        //     console.log("click!")
        // }}
     />
      
  )

  render() {
    const dataObj = [
      { title: "Text 1", key: "1" },
      { title: "Text 2", key: "2" },
      { title: "Text 3", key: "3" }
    ];

    return (
      <View>
       
        <FlatList
          data={dataObj}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
