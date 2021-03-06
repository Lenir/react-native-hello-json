//imports - React, React-native.
import React, {Component} from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  Animated,
  Alert,
  StyleSheet,
  Text,
  Button,
  TextInput,
  Keyboard,
  View,
  Image,
  TouchableOpacity,
  Timer,
  Navigator
} from 'react-native';

//imports - other APIs.
import {
  Scene,
  Router,
  Reducer,
  Actions,
  ActionConst
} from 'react-native-router-flux';
import * as firebase from 'firebase';
import FCM from 'react-native-fcm';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PushNotification from 'react-native-push-notification';


import PushController from '../component/pushController'
import FirebaseClient from '../component/firebaseClient'


//var, funcs
var apiUrl = 'http://swapi.co/api/';
var URL = 'http://swapi.co/api/people/1';
function localPush(_title,_message){
  PushNotification.localNotification({
      /* Android Only Properties */
      //id: '0', // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      //ticker: "My Notification Ticker", // (optional)
      autoCancel: false, // (optional) default: true
      //largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
      //smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
      //bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
      //subText: "This is a subText", // (optional) default: none
      //color: "red", // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      //tag: 'some_tag', // (optional) add tag to message
      //group: "group", // (optional) add group to message
      ongoing: true, // (optional) set whether this is an "ongoing" notification

      /* iOS and Android properties */
      title: _title, // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
      message: _message, // (required)
      soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      //number: '10', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    });
  };
type State = {
  token:String,
  pname: String;
  pheight: number;
  pmass: number;
  peopleNo: number;
  peopleUrl : String;
  loading: boolean;
  indicatorSize: number;
};

//Main class
export default class ApiMain extends Component {
  _timer: Timer;

  constructor(props) {
       super(props);
       this.state={
         token:" ",
         pname:null,
         pheight:null,
         pmass:null,
         peopleNo: '1',
         peopleUrl : 'http://swapi.co/api/people/1',
         loading: true,
         iconSize: 25,
       };
   }
   componentDidMount() {
    this.setToggleTimeout();
    PushNotification.configure({
        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function(token) {
            console.log( 'TOKEN:', token );
        },

        // (required) Called when a remote or local notification is opened or received
        onNotification: function(notification) {
            console.log( 'NOTIFICATION:', notification );
        },

        // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
        senderID: "YOUR GCM SENDER ID",

        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
            alert: true,
            badge: true,
            sound: true
        },

        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,

        /**
          * (optional) default: true
          * - Specified if permissions (ios) and token (android and ios) will requested or not,
          * - if not, you must call PushNotificationsHandler.requestPermissions() later
          */
        requestPermissions: true,
    });
  }
  componentWillUnmount() {
    clearTimeout(this._timer);
  }
   setToggleTimeout() {
   this._timer = setTimeout(() => {
     this.setState({loading: false});
   }, 1);
 }
    fetchData(){

      this.setState({loading: true});
      fetch(this.state.peopleUrl)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            pname: responseData.name,
            pheight: responseData.height,
            pmass: responseData.mass,
            loading: false
          });
          if(this.state.pname == null){
            Alert.alert(
              'Error',
              'Input invalid',
              [
                {text: 'OK'},
              ]
            )
          }else{
            localPush("API Called",this.state.pname+"'s Info called");
            Actions.detailInfo({
              name:this.state.pname,
              height: this.state.pheight,
              mass: this.state.pmass})};
        })
        .done()
    }
   renderLoadingView() {
     return (
       <View style={styles.container}>
         <ActivityIndicator
           animating={true}
           color="#9e9e9e"
           style={[{alignItems:'center'}, {height: 50}]}
           size="large"
         />
       </View>
     );
   }

  render() {
    let { token } = this.state.token;
    var setUrl = apiUrl+ 'people/' + this.state.peopleNo;
    console.log("Props", this.props, this.state);
    return (

        <View style={styles.container}>
          <View style={styles.container}>
                <View style={{alignItems:'center'}}>
                    <Text style={{
                      fontSize:25,
                      fontWeight: 'bold',
                      color:'#8e8e8e'
                      }}>Starwars API
                    </Text>
                    <Text style={{color:'#9e9e9e'}}>
                      Simple API Call Tutorial
                    </Text>

                    <TextInput style={{width:50,
                      height: 40,
                      color:'#7e7e7e',
                      alignItems:'center'
                      }}
                      onChangeText={(peopleNo) => {
                        this.setState({peopleNo})
                        this.setState({peopleUrl:'http://swapi.co/api/people/'+peopleNo})}}
                      keyboardType = 'numeric'
                      value={this.state.peopleNo}/>
                        <TouchableOpacity onPress={()=>{
                            this.fetchData();
                          }
                        }>

                          <Ionicons size={30} name="ios-search" color="#909090"/>
                        </TouchableOpacity>

                      <View style={{margin:10,alignItems:'center'}}>
                        <Text style={{fontSize:10 ,color:'#9e9e9e'}}>Call API by</Text>
                        <Text style={{fontSize:10 ,color:'#9e9e9e'}}>{setUrl}</Text>
                      </View>
                        <ActivityIndicator
                          animating={this.state.loading}
                          color="#aeaeae"
                          style={[{alignItems:'center'}, {height:50}]}
                          size="large"
                        />
                </View>
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
