import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import NameText from './src/NameText';

export default class App extends React.Component {
  
  render() {
    return(
      <View style={styles.container}>
        <NameText name="Phantom"/>
        <Image source={require('./src/images/PhantomImages.jpg')}
        
        /> 
        {/* <NameText name="Dennis"/>
        <Image 
            source={{
                 uri: "https://i.pinimg.com/originals/27/71/c5/2771c5c7600f6b3b1932538b81d7c9e4.jpg"
               }}  // We can also pass an Object to Source - url, method, headers
            style={{width: 300, height: 500}}
        /> */}
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default class App extends React.Component {
  
//   render() {
//     return(
//       <View style={styles.container}>
//         <Text style={styles.textStyle}>Components !!!</Text>
//         <Text style={styles.textStyle}>Components !!!</Text>
//         <Text style={styles.textStyle}>Components !!!</Text>
//       </View>
//     );
//   } 
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//    textStyle:{
//      fontSize: 22,
//      color: "#FFFFFF",
//      backgroundColor:"orange",
//      paddingHorizontal: 15,
//      paddingVertical:10,
//      borderRadius: 10,
//      marginTop: 5
//    }
// });
