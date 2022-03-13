// import React, {Component} from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import S1 from './components/Screen1';
// import S2 from './components/Screen2';

// const App = createStackNavigator(
//   {
//     S1: {Screen:S1},
//     S2: {Screen:S2},
//   }
// );

// export default createAppContainer(App);








import React from 'react';
import Receipt from './components/Receipt';
import Tabs from './components/Tabs';
import {
  View,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
      <View style={styles.container}>
        <Receipt/>
        {/* <Tabs/> */}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
export default App;
