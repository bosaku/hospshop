import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default class GalleryItem extends Component {
  render = ({ title, author, poster_path } = this.props.item) => (
    <View style={styles.gallery}>
      <Text style={styles.title}>{title}</Text>
      <Image
          style={{width: 200, height: 200}}
          source={{uri: "https://image.tmdb.org/t/p/w780"+poster_path}}
        />
      {/* <Image source={{uri: "https://image.tmdb.org/t/p/w780"+poster_path}} /> */}
      {/* <Text>{ "https://image.tmdb.org/t/p/w780"+poster_path}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  gallery: {
    backgroundColor: '#E6EBEB',
    borderRadius: 5,
    borderWidth: 10,
    borderColor: "transparent",
    flexBasis:'content',
    // flexGrow: 1,
    alignSelf: "stretch"
    //  flexStretch:true
  },
  title:{fontSize:30}
});
