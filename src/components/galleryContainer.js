import React, { Component } from "react";
import { StyleSheet, Text, View} from "react-native";
import GalleryItem from './galleryItem'


//Gallery will create GalleryContainers. GalleryContainers will create Gallery Items
export default class GalleryContainer extends Component {

    
    state = {
        items : this.props.data.films
    }

    render ()
    {
        //  console.log("length : " + this.state.items.length)
        return (
           
           this.state.items.map((item, k) => {
               return(
                   <View style={styles.gallery}>
                   <GalleryItem item={item} key={k}/>
                   <View style={{height:2 , backgroundColor:'transparent'}}></View>
                   </View>
               )
           }) 
        )
       
       
        
    }
}

const styles = StyleSheet.create({
    gallery:{
        backgroundColor:"#D7FDFE",
        borderRadius: 5,
        borderWidth: 10,
        borderColor:'transparent',
        flexDirection: 'row',
           flexGrow:1,
           flexBasis:'content',
          alignSelf:'stretch',
        //  flexStretch:true
        
    }
});