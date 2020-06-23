import React from 'react';
import { StyleSheet, View, Button, Alert, Text, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

export default class App extends React.Component {

  // touchable - 'react-native' element; lets you wrap any element(Text, Images, etc...) with it. To make it touchable.

  constructor(){   // Sine are not using any Props we can leave them.
     super();
     this.state = {
       randomColor: null
     }
  }

  getRandomColor = () => {
    console.log("Inside Random Color");
    return("rgb(" +
             Math.floor((Math.random() * 256)) + 
             ","+ 
             Math.floor((Math.random() * 256)) + 
             ","+ 
             Math.floor((Math.random() * 256)) + 
              ")" 
            );
  }

  myButtonPressed = () => {
   // Alert.alert("Logout");
    this.setState({ randomColor: this.getRandomColor()});
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.randomColor}]}>
        {/* <Button 
                onPress={() => {Alert.alert("Logout")}} 
                title="Login.."
                color="#BB2CD9" /> */}
          <TouchableOpacity
            onPress={this.myButtonPressed}
          >
              <Text style={styles.text}> Random Ground Color </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 12,
    paddingHorizontal: 20,
    color: "#FFFFFF",
    
    borderWidth: 2,
    borderColor: "#FFFFFF"
  }
});
