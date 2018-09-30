import React from 'react';
import MainScreen from './screens/MainScreen';
import StartingScreen from './screens/StartingScreen';
import { StackNavigator } from 'react-navigation';

let Root = StackNavigator({
    //VISTAS DE USUARIO:
    Main:{
      screen: MainScreen
    },
    Starting: {
      screen: StartingScreen
    },
  },{headerMode: 'none',
    mode: 'modal'
  });
  
  
  
  export default Root;
  