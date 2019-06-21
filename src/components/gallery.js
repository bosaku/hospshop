import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import GalleryItem from "./galleryItem";
 //import { Col, Row, Grid } from "react-native-easy-grid";
 //import { FlatGrid } from 'react-native-super-grid';

export default class Gallery extends Component {
  state = {
    items: this.props.data.films,
    horizontalItemCount: 3
  };

  render() {
  
    return (
        // <View>
        //     <Text>Hi</Text>
        // </View>
      //Create Gallery Containers
      this.state.items.map((item, k) => {
        return (
          <View key={k} style={styles.gallery}>
            {/* Make array of galleryItems of number horizontalItemCount */}
            {/* Map through an array which has been created for this purpose */}
            <GalleryItem item={item} key={k} />

            <View style={{ height: 2, backgroundColor: "transparent" }} />
          </View>
        );
      })
    );
  }
}

const styles = StyleSheet.create({
  gallery: {
    backgroundColor: "#FFFEFC",
    borderRadius: 5,
    borderWidth: 10,
    borderColor: "transparent",
    flexDirection: "row",
    flexGrow: 1,
    flexBasis: "content",
    alignSelf: "stretch"
    //  flexStretch:true
  }
});
