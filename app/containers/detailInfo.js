//imports - react, react-native.
import React, {Component} from 'react';
import {
  AppRegistry,
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
          <Text style={{color:'#aeaeae',fontWeight:'bold'}}>{this.props.name}</Text>
        </View>

        <View style={{margin:5,alignItems:'center'}}>
          <Text style={{color:'#5e5e5e'}}>Height</Text>
          <Text style={{color:'#aeaeae',fontWeight:'bold'}}>{this.props.height}</Text>
        </View>

        <View style={{margin:5,alignItems:'center'}}>
          <Text style={{color:'#5e5e5e'}}>Mass</Text>
          <Text style={{color:'#aeaeae',fontWeight:'bold'}}>{this.props.mass}</Text>
        </View>
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
