import React, { Component } from "react";

import FCM from "react-native-fcm";

import FirebaseClient from  "./firebaseClient";

export default class PushController extends Component {
  constructor(props) {
    console.log("pushController Constructor.");
    super(props);
    this.state={
      token:""
    }
  }

  componentDidMount() {
    let token = this.state.token;
    console.log("pushController monted.");
    FCM.getFCMToken().then(token => {
      console.log("TOKEN (getFCMToken)", token);
      this.props.onChangeToken(token);
    });

    FCM.getInitialNotification().then(notif => {
      console.log("INITIAL NOTIFICATION", notif)
    });

    this.notificationUnsubscribe = FCM.on("notification", notif => {
      console.log("Notification", notif);
      if (notif && notif.local) {
        return;
      }
      this.sendRemote(notif);
    });

    this.refreshUnsubscribe = FCM.on("refreshToken", token => {
      console.log("TOKEN (refreshUnsubscribe)", token);
      this.props.onChangeToken(token);
    });
  }

  sendRemote(notif) {
    FCM.presentLocalNotification({
      title: notif.title,
      body: notif.body,
      priority: "high",
      click_action: notif.click_action,
      show_in_foreground: true,
      local: true
    });
  }

  componentWillUnmount() {
    this.refreshUnsubscribe();
    this.notificationUnsubscribe();
  }


  render() {
    return null;
  }
}
