import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // Importing an Icon from Expo
import { Button } from 'native-base';

var itemArray = new Array(9).fill('empty'); 

export default class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
         isCross: false,
         winMessage: ""
      };
  }

  drawItem = (itemNumber) => {
    //TODO: What to draw: Circle or Cross or Default.
    if(itemArray[itemNumber] === 'empty'){
      itemArray[itemNumber] = this.state.isCross;
      this.setState({ isCross: !itemArray[itemNumber]}, () => {
        console.log("isCross : ", this.state.isCross);
      })
    }
    
    //TODO: Check for win
    this.winGame();
  };

  chooseItemIcon = (itemNumber) => {
    //TODO: Choose Appropriate Icon
    if(itemArray[itemNumber] !== 'empty'){
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "pencil";
  };

  chooseItemColor = (itemNumber) => {
    //TODO: Choose Color for Icon
    if(itemArray[itemNumber] !== 'empty'){
      return itemArray[itemNumber] ? "red" : "green";
    }
    return "black";
  };

  resetGame = () => {
    //TODO: Reset all Values & States.
    itemArray.fill('empty');
    this.setState({ winMessage: ''});
    //force Update to the component
    this.forceUpdate();
  };

  winGame = () => {
    //TODO: Decide/Check Winner
    if ((itemArray[0] !== "empty") && (itemArray[0] == itemArray[1]) && (itemArray[1] == itemArray[2])){
      this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat(' Win')});
    }else if ((itemArray[3] !== "empty") && (itemArray[3] == itemArray[4]) && (itemArray[4] == itemArray[5])){
      this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat(' Win')});
    }else if ((itemArray[6] !== "empty") && (itemArray[6] == itemArray[7]) && (itemArray[7] == itemArray[8])){
      this.setState({ winMessage: (itemArray[6] ? 'Cross' : 'Circle').concat(' Win')});
    }else if ((itemArray[0] !== "empty") && (itemArray[0] == itemArray[3]) && (itemArray[3] == itemArray[6])){
      this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat(' Win')});
    }else if ((itemArray[1] !== "empty") && (itemArray[1] == itemArray[4]) && (itemArray[4] == itemArray[7])){
      this.setState({ winMessage: (itemArray[1] ? 'Cross' : 'Circle').concat(' Win')});
    }else if ((itemArray[2] !== "empty") && (itemArray[2] == itemArray[5]) && (itemArray[5] == itemArray[8])){
      this.setState({ winMessage: (itemArray[2] ? 'Cross' : 'Circle').concat(' Win')});
    }else if ((itemArray[0] !== "empty") && (itemArray[0] == itemArray[4]) && (itemArray[4] == itemArray[8])){
      this.setState({ winMessage: (itemArray[0] ? 'Cross' : 'Circle').concat(' Win')});
    }else if ((itemArray[2] !== "empty") && (itemArray[2] == itemArray[4]) && (itemArray[4] == itemArray[6])){
      this.setState({ winMessage: (itemArray[2] ? 'Cross' : 'Circle').concat(' Win')});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <View style={styles.grid}> 
           {/* Row One */}
           <View style={styles.row}>
             <View style={styles.item}>
               <TouchableOpacity
                onPress={() => this.drawItem(0)}
               > 
                 <Entypo name={this.chooseItemIcon(0)}
                         size={50}
                         color={this.chooseItemColor(0)}
                 />
               </TouchableOpacity>
             </View>

             <View style={styles.item}>
               <TouchableOpacity
                onPress={() => this.drawItem(1)}
               > 
                 <Entypo name={this.chooseItemIcon(1)}
                         size={50}
                         color={this.chooseItemColor(1)}
                 />
               </TouchableOpacity>
             </View>

             <View style={styles.item}>
               <TouchableOpacity
                onPress={() => this.drawItem(2)}
               > 
                 <Entypo name={this.chooseItemIcon(2)}
                         size={50}
                         color={this.chooseItemColor(2)}
                 />
               </TouchableOpacity>
             </View>

           </View>
           {/* Row Two */}
           <View style={styles.row}>
             <View style={styles.item}>
               <TouchableOpacity
                onPress={() => this.drawItem(3)}
               > 
                 <Entypo name={this.chooseItemIcon(3)}
                         size={50}
                         color={this.chooseItemColor(3)}
                 />
               </TouchableOpacity>
             </View>

             <View style={styles.item}>
               <TouchableOpacity
                onPress={() => this.drawItem(4)}
               > 
                 <Entypo name={this.chooseItemIcon(4)}
                         size={50}
                         color={this.chooseItemColor(4)}
                 />
               </TouchableOpacity>
             </View>

             <View style={styles.item}>
               <TouchableOpacity
                onPress={() => this.drawItem(5)}
               > 
                 <Entypo name={this.chooseItemIcon(5)}
                         size={50}
                         color={this.chooseItemColor(5)}
                 />
               </TouchableOpacity>
             </View>

           </View>
           {/* Row Three */}
           <View style={styles.row}>
             <View style={styles.item}>
               <TouchableOpacity
                onPress={() => this.drawItem(6)}
               > 
                 <Entypo name={this.chooseItemIcon(6)}
                         size={50}
                         color={this.chooseItemColor(6)}
                 />
               </TouchableOpacity>
             </View>

             <View style={styles.item}>
               <TouchableOpacity
                onPress={() => this.drawItem(7)}
               > 
                 <Entypo name={this.chooseItemIcon(7)}
                         size={50}
                         color={this.chooseItemColor(7)}
                 />
               </TouchableOpacity>
             </View>

             <View style={styles.item}>
               <TouchableOpacity
                onPress={() => this.drawItem(8)}
               > 
                 <Entypo name={this.chooseItemIcon(8)}
                         size={50}
                         color={this.chooseItemColor(8)}
                 />
               </TouchableOpacity>
             </View>

           </View>
            
           <Text style={styles.winMessage}> {this.state.winMessage} </Text>
           <Button full rounded primary style={styles.button}
                   onPress={this.resetGame} > 
               <Text style={styles.btnText} > Reset Game </Text> 
            </Button>

        </View>
        <StatusBar style="auto" />
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
  grid: {

  },
  row: {
    flexDirection: 'row'
  },
  item: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 30
  },
  winMessage:{
    padding: 20,
    fontSize: 25,
    fontWeight: "bold"
  },
  button: {
    margin: 20,
    padding: 10
  },
  title:{
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  btnText:{
    color: '#fff',
    fontWeight: "bold"
  }
});
