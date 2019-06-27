import React, { Component } from "react";
// import Modal from "./components/modalenhanced.js";
// import AjaxReq from "./tools/ajaxreq.js";

import { StyleSheet, View, Platform, Text } from "react-native";
import Gallery from "./components/gallery.js";
import Filter from "./components/filter.js";
import Data from './TMDB.js'

class App extends Component {

state ={
  
}
  
  render() {
    
    let filterPercentage = 50;

    return (
          
      <View style={styles.vertLayoutContainer } >
        {/* <Text>Filter</Text> */}
        <Filter style={styles}>
        </Filter>
        <View //separator
          style={{
            borderBottomColor: "transparent",
            borderBottomWidth: 40
          }}
        />
        <Text>Gallery with {Data.films.length}</Text>
        <Gallery data={Data}/>
          
        
        {/* <Modal style={{flex:.3, }} ></Modal> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  vertLayoutContainer: 
  {
    flex: 1,
    flexDirection : 'column',
    // justifyContent: 'center'
    backgroundColor:'#807F7E',
    alignItems:'stretch'
  },
  galleryContainer: {
    //  flex: 1,
    // // flexGrow:1,
    // flexDirection: 'row',
    // backgroundColor: "white",
    // borderWidth:10,
    // borderColor:'transparent',
    // // justifyContent: "center",
    // // alignItems: 'stretch',
    // alignSelf:'stretch'
  },
  filterWrapper:{
     
     borderRadius:'5',
     backgroundColor:"#40403F",
     color:"#E6E5E3" //text
  },

  button: {
    borderRadius: 3,
    padding: 20,
    marginVertical: 10,
    marginTop: 10,
    backgroundColor: "#1B95E0"
  },
  
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },

  filterBG:{
    backgroundColor: "#DA70D6"
  }
  
});

let hotWrapper = () => () => App;
if (Platform.OS === "web") {
  const { hot } = require("react-hot-loader");
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
