//imports - react, react-native.
import React, {Component} from 'react';
import {
  AppRegistry,
  Animated,
  StyleSheet,
  Text,
  Button,
  TextInput,
  Keyboard,
  View,
  ListView,
  ScrollView,
  Image,
  TouchableOpacity,
  Navigator,
  AsyncStorage
} from 'react-native';

//imports - other APIs
import {Scene, Router,Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Component, Containers


//Main class.
export default class DetailInfo extends Component {
  constructor(props) {
       super(props);
       this.state ={
         namesize: new Animated.Value(10),
       }
   }
   componentDidMount() {
     Animated.timing(          // Uses easing functions
       this.state.namesize,    // The value to drive
       {toValue: 20}            // Configuration
     ).start();                // Don't forget start!
   }
   componentWillUnmount() {
     clearTimeout(this._timer);
   }
  render() {
    console.log("Props", this.props, this.state);
    return (
      <View style={styles.container}>
        <View style={{margin:10,alignItems:'center'}}>
          <Text style={{fontSize:10 ,color:'#9e9e9e'}}>Called API detail Infomation</Text>
        </View>
        <View style={{margin:5,alignItems:'center'}}>
          <Text style={{color:'#5e5e5e'}}>Name</Text>
          <Animated.Text style={{fontSize: this.state.namesize, color:'#aeaeae',fontWeight:'bold'}}>{this.props.name}</Animated.Text>
        </View>

        <View style={{margin:5,alignItems:'center'}}>
          <Text style={{color:'#5e5e5e'}}>Height</Text>
          <Text style={{color:'#aeaeae',fontWeight:'bold'}}>{this.props.height}</Text>
        </View>

        <View style={{margin:5,alignItems:'center'}}>
          <Text style={{color:'#5e5e5e'}}>Mass</Text>
          <Text style={{color:'#aeaeae',fontWeight:'bold'}}>{this.props.mass}</Text>
        </View>
        <TouchableOpacity onPress={()=>Actions.pop()}>
          <Ionicons size={35} name="ios-arrow-round-back" color="#909090"/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    backgroundColor: 'white'
  },
  button: {
    padding: 5,
    backgroundColor: 'white'
  },
});
