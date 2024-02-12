import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity, ScrollView
} from "react-native";
import React, { useState,useEffect } from "react";
import styles from "./style";
import Colors from "../../assets/colors";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import PaymentSucess from "../../components/PaymentSucess";



const Paysucess = ({navigation,route}) => {
  const [show, setShow] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const menuClick = () => {
    setShow(!show)
  } 
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('Drawer')
    }, 3000)
  
  },[])

  console.log(route.params)
  return (
    <View
      style={{
        flex: 1, backgroundColor: "#fff",
      }}>
       
      <ScrollView style={{ marginHorizontal: 15 }}>
        {/* type = "payment" or any other */}
        <PaymentSucess
        type={route.params&&route.params.type?route.params.type:'data'}
        />
      </ScrollView>
    </View>

  )
}

export default Paysucess