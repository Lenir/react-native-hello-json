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
import {Scene, Router,Actions } from 'react-native-router-flux';

import Ionicons from 'react-native-vector-icons/Ionicons';

var apiUrl = 'http://swapi.co/api/';
var URL = 'http://swapi.co/api/people/1';



export default class InfoPage extends Component {
  constructor(props) {
       super(props);
       this.state={
         pname:null,
         pheight:null,
         pmass:null,
         peopleNo: '0',
         peopleUrl : 'http://swapi.co/api/people/1',
         loading: true
       }
   }
    fetchData(){
      fetch(this.state.peopleUrl)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            pname: responseData.name,
            pheight: responseData.height,
            pmass: responseData.mass,
            loading: false
          });
        })
        .done();
    }
   renderLoadingView() {
     return (
       <View style={styles.container}>
         <Text>
           Loading Data...
         </Text>
       </View>
     );
   }
  render() {
    var setUrl = apiUrl+ 'people/' + this.state.peopleNo;
    console.log("Props", this.props, this.state);
    return (

        <View style={styles.container}>
          <ScrollView>
          <View style={styles.container}>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:25,fontWeight: 'bold',color:'#8e8e8e'}}>Starwars API</Text>
                    <Text style={{color:'#9e9e9e'}}>Simple API Call Tutorial</Text>
                    <TextInput style={{width:50, height: 40, color:'#7e7e7e', alignItems:'center'}}
                      onChangeText={(peopleNo) => {
                        this.setState({peopleNo})
                        this.setState({peopleUrl:'http://swapi.co/api/people/'+peopleNo})}}
                      keyboardType = 'numeric'
                      value={this.state.peopleNo}/>
                      <TouchableOpacity onPress={
                        this.fetchData()
                      }>
                        <Ionicons size={25} name="ios-search" color="#909090"/>
                      </TouchableOpacity>
                      <View style={{margin:10,alignItems:'center'}}>
                        <Text style={{fontSize:10 ,color:'#9e9e9e'}}>Call API by</Text>
                        <Text style={{fontSize:10 ,color:'#9e9e9e'}}>{setUrl}</Text>
                      </View>

                      <View style={{margin:5,alignItems:'center'}}>
                        <Text style={{color:'#5e5e5e'}}>Name</Text>
                        <Text style={{color:'#aeaeae',fontWeight:'bold'}}>{this.state.pname}</Text>
                      </View>

                      <View style={{margin:5,alignItems:'center'}}>
                        <Text style={{color:'#5e5e5e'}}>Height</Text>
                        <Text style={{color:'#aeaeae',fontWeight:'bold'}}>{this.state.pheight}</Text>
                      </View>

                      <View style={{margin:5,alignItems:'center'}}>
                        <Text style={{color:'#5e5e5e'}}>Mass</Text>
                        <Text style={{color:'#aeaeae',fontWeight:'bold'}}>{this.state.pmass}</Text>
                      </View>
                </View>
            </View>
          </ScrollView>
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
    flexDirection: 'row',
  },
  wrapper: {
    backgroundColor: 'white'
  },
  button: {
    padding: 5,
    backgroundColor: 'white'
  },
});
