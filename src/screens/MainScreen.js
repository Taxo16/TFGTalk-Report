import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class MainScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
 
      <View style={styles.logoContainer}>
          <Image style={styles.logo}
            source={require('../images/logo-informes.png')} />
        </View>
        <Text style={styles.title}>APP DE CREACIÓN DE INFORMES </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Starting')}
          style={styles.containerButton} >
          <Text style={styles.buttonText}>Crear informe</Text>
          </TouchableOpacity>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db',
      },
    buttonText: {
        textAlign: 'center',
        color: 'rgba(255,255,255,1)',
        fontWeight: 'bold',
        fontSize:15,
    },
        containerButton: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal:100,
        paddingVertical:10,        
        marginBottom:20,
        justifyContent:'center',
    },
      title:{
       
        fontSize: 20,
        fontWeight: 'bold',
        padding:50
        
    },
    logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  logo: {
    width: 200,
    height: 200,
    opacity: 0.9,
  },
});
