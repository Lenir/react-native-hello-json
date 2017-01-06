import React, {Component} from 'react';

import {Scene, Router,Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import InfoPage from './infoPage'

export default class App extends Component {
  constructor(props) {
       super(props);
   }
  render() {
    console.log("Props", this.props, this.state);
    return (
        <Router>
          <Scene key="root"  hideNavBar hideTabBar>
            <Scene key="infoPage" component={InfoPage} initial={true}/>
          </Scene>
        </Router>
    );
  }
}
