import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity, ScrollView, StatusBar
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Colors from "../../assets/colors";
import LottieView from 'lottie-react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize, responsiveScreenFontSize, responsiveScreenWidth } from "react-native-responsive-dimensions";

import Ion from 'react-native-vector-icons/Ionicons';

import AntDesign from 'react-native-vector-icons/AntDesign';

import AppIntroSlider from 'react-native-app-intro-slider';

const Intro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  const handleLogin = () => {
  };
  const slides = [
    {
      key: 1,
      title: 'PCMT .inc',
      text: 'No More Harasement for College Clearnce !',
      image: require('../../assets/animate/1.json'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Payment',
      text: 'Now Pay your College fee at few easy steps.',
      image: require('../../assets/animate/2.json'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Sign up',
      text: 'Easy sign up process.',
      image: require('../../assets/animate/3.json'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 4,
      title: 'Routine',
      text: 'Manage Your College Routine.',
      image: require('../../assets/animate/4.json'),
      backgroundColor: '#22bcb5',
    }
  ];

  const onDone = () => {
   navigation.navigate('Login')
  }
  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1,backgroundColor:'#fff' }}>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <LottieView style={styles.introImageStyle} source={item.image} autoPlay loop />
        <View style={{position:'absolute',bottom:'20%'}}>
        
        <Text style={styles.titleStyle}>{item.title}</Text>

        <Text style={styles.introTextStyle}>{item.text}</Text>

        </View>
        
      
      </View>
    );
  }
  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign
          name="arrowright"
          color="#fff"
          size={responsiveScreenFontSize(3.5)}
        />
      </View>
    );
  };
  const renderSkipButton = () => {
    return (
      <View style={{height:responsiveScreenWidth(10),alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'#999',fontSize:responsiveFontSize(2.4)}}>Skip</Text>
        
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion
          name="checkmark"
          color="rgba(255, 255, 255, .9)"
          size={responsiveFontSize(4)}
        />
      </View>
    );
  };



  return (
    <View style={styles.container}>

      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderSkipButton={renderSkipButton}
        onDone={onDone}
        activeDotStyle={{backgroundColor:Colors.primary,width:30}}
        showSkipButton={true}
      />

    </View>
  )
}

export default Intro;