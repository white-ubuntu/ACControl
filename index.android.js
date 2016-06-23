/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    DrawerLayoutAndroid,
   Navigator,
   BackAndroid,
} from 'react-native';
import Welcome from './App/Views/Welcome'
import Views from './App/Views/'

class ACControl extends Component {
    constructor(){
        super();
        this.state={
            isWelcome:true,

        }
    }
    componentDidMount(){
        this.times=setTimeout(()=>{
            this.setState({isWelcome:false});
        },2000);
    }
    componentWillUnmount(){
        clearTimeout(this.times);
    }
    _renderScene(route,navigator){
        if(route.name=='Views'){
            return (<Views navigator={navigator}/>);
        }
    }
  render() {
      if(this.state.isWelcome){
          return (
              <Welcome />
          );
      }else{

          return (
                  <Navigator
                      initialRoute={{name: 'Views', index: 0}}
                      renderScene={this._renderScene}
                      configureScene={()=>Navigator.SceneConfigs.FloatFromLeft}
                  />
          );
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ACControl', () => ACControl);
