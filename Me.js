import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Dimensions,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Me({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight
            style={styles.logoImgContainer}>
          <Image
          source={require('./assets/unknown.png')}
          style={styles.logo}
          resizeMode="contain"
          />
        </TouchableHighlight>
        <Text style={styles.personalDetails}>
          My Name
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login', {
          screen: 'Login'
        })}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              <MaterialCommunityIcons name="logout" size={20} color="white"/>
              LOGOUT
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.13;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer:{
    flex:2,
    backgroundColor: 'red',
    borderTopLeftRadius: 30,
    borderTopRightRadius:30,
    paddingVertical:50,
    paddingHorizontal:30
  },
  logo:{
    width: height_logo,
    height: height_logo,
    borderRadius:60
  },
  logoImgContainer: {
    marginLeft: 8,
    height: height_logo,
    width: height_logo,
    borderRadius: 60,
    overflow:'hidden',
    borderColor: 'black',
    borderWidth:2
  },
  personalDetails:{
    fontSize: 20,
    fontWeight:'Bold',
  },
  button: {
   alignItems: 'flex-start',
   justifyContent: 'center',
   borderColor:'white',
   borderTopWidth:1,
   borderBottomWidth:1,
 },
 buttonText: {
   textAlign: 'left',
   padding: 20,
   color: 'white',
   fontWeight:'bold'
 }
});
