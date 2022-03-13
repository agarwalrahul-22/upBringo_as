import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import Receipt from './Receipt.js';
import Tabs from './Tabs.js';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "receipt" component = {Receipt} title = "Receipt" initial = {true} />
         <Scene key = "tabs" component = {Tabs} title = "Tabs" />
      </Scene>
   </Router>
);
export default Routes;
