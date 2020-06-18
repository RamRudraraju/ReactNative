import React, {Component} from 'react';  // 1
import { StyleSheet, Text } from 'react-native';

// Copied from App.js
export default class NameText extends Component { //2 - 2
  render() {
    return(
        <Text style={styles.textStyle}>{this.props.name}</Text>
    );
  } 
}

const styles = StyleSheet.create({
   textStyle:{
     fontSize: 22,
     color: "#FFFFFF",
     backgroundColor:"green",
     paddingHorizontal: 15,
     paddingVertical:10,
     borderRadius: 10,
     marginTop: 5
   }
});
