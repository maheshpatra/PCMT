import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity, ScrollView,Alert
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Colors from "../../assets/colors";
import Feather from 'react-native-vector-icons/Feather';
// import { CheckBox } from '@rneui/themed';
import CheckBox from 'react-native-check-box';
import OTPTextInput from 'react-native-otp-textinput'
import { responsiveScreenWidth, responsiveWidth } from "react-native-responsive-dimensions";
const Verification = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  const handleLogin = () => {
  };



  return (
    <View
      style={{
        flex: 1,

        backgroundColor: "#fff",
      }}
    >

     
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15 }}>
        <Image
          style={{ height: responsiveScreenWidth(35), width: responsiveScreenWidth(35), alignSelf: 'center',marginTop:10 }}
          source={require('../../assets/images/3.png')}
        />
        <Image
          style={{ height: responsiveWidth(15), width: responsiveWidth(45), alignSelf: 'center', marginTop: 20 }}
          source={require('../../assets/images/logo.png')}
        />
        <View style={{ width: "100%", marginTop: 20 }}>
          <Text style={styles.text1}>Enter the Verification code we sent to +918762573345 </Text>
          <Text style={styles.text2}>Type 6 digit security code</Text>
          <OTPTextInput
            inputCount={6}
            inputCellLength={1}
            offTintColor={'#ccc'}
            tintColor={Colors.primary}
            autoFocus={true}
            textInputStyle={{borderWidth:4,borderRadius:6,height:responsiveScreenWidth(13),width:responsiveScreenWidth(12)}}
          />
         
          <TouchableOpacity
            style={styles.updatebtn}
            onPress={() => {
              navigation.navigate('Course')
            }}
          >
            <Text style={styles.updatetext}>
              VERIFY & PROCEED
            </Text>
          </TouchableOpacity>

          

          <Text style={{ color: "#555", marginTop: 20, alignSelf: "center" }}>
            Don't have an account ?
            <Text
              onPress={() => {Alert.alert('Otp sucessfully send !')}}
              style={{ color: Colors.red, marginTop: 10, fontWeight: 'bold' }}
            >
              {" "}
              Resend OTP
            </Text>
          </Text>




        </View>

      </ScrollView>




    </View>
  );
};

export default Verification;