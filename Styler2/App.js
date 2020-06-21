import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {                     
      return (                   // Default Flex Direction is from Top to Bottom (Column) // flexDirection:"column-reverce"
                                 // justifyContent (Main Access    - Top to Bottom --> if (flexDirection: "column") : Allways sync with main access(Top to Bottom).
                                 // alignItems     (Secondary Access - Left to Right) :    
      <View style={{flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between", // center
                      alignItems: "stretch",
                      marginTop: 50}}>
           <View style={{ width: 100, height: 100, backgroundColor:"#2475B0"}} /> 
           <View style={{ width: 50, backgroundColor:"#10A881"}} />     
           <View style={{ width: 100, height: 100, backgroundColor:"#E74292"}} />
        </View>
      );
  }
}

// style={styles.container}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
