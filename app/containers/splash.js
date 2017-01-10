//imports - react, react-native.
import React, {Component} from 'react';
import {
  AppRegistry,
  Action,
  StyleSheet,
  Text,
  Button,
  Timer,
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
export default class Splash extends Component {
  _timer: Timer;
  constructor(props) {
       super(props);
   }
   componentDidMount() {
    this.setToggleTimeout();
   }
   componentWillUnmount() {
    clearTimeout(this._timer);
  }

   setToggleTimeout() {
   this._timer = setTimeout(() => {
     Actions.apiMain();
   }, 1000);
   }
  render() {
    console.log("Props", this.props, this.state);
    return (
      <View style={{alignItems:'center', justifyContent:'center',flex:1}}>
        <Text style={{fontSize:30, fontWeight:"bold",color:'#aeaeae'}}>API TUTORIAL</Text>
      </View>
    );
  }
}
