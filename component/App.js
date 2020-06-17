import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NameText from './src/NameText';

export default class App extends React.Component {
  
  render() {
    return(
      <View style={styles.container}>
        <NameText name="Steve Jobs"/>
        <NameText name="Bill Gates"/>
        <NameText name="Elon Musk"/>
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
