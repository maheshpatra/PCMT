import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity, ScrollView
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Colors from "../../assets/colors";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import Header from "../../components/Header";



const Share = ({navigation}) => {
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


  return (
    <View
      style={styles.container}>
        <Header
         navigation={navigation}
         />
       
      <ScrollView style={{ marginHorizontal: 15 }}>
        <Image
          style={{ height: responsiveWidth(15), width: responsiveWidth(45), alignSelf: 'center', marginTop: 20 }}
          source={require('../../assets/images/logo.png')}/>
        <View style={{ width: "100%", marginTop: 15 }}>
          <TouchableOpacity
            style={styles.submitbtn}
            onPress={() => {}}>
            <AntDesign name="sharealt" color={Colors.primary} size={responsiveWidth(5)} />
            <Text style={{ fontWeight: "normal", fontSize: 17, color: Colors.grey, fontFamily: 'Nunito-Medium',marginLeft:10 }}>
              Share
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

  )
}

export default Share