import React, { Component } from 'react';
import Modal from './components/modalenhanced.js'
import AjaxReq from './tools/ajaxreq.js'

import {
  StyleSheet,
  View,
  Platform,

} from 'react-native';


class App extends Component {
 

  render() {
 

    return (
      <View style={styles.container}>
        AjaxReq.FetchAndWait('https://api.github.com/users/chriscoyier/repos')
        <Modal style={{flex:.3, }} ></Modal>
        
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
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    borderRadius: 3, 
    padding: 20,
    marginVertical: 10,
    marginTop: 10,
    backgroundColor: '#1B95E0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
