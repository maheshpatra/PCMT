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
import HeaderAb from "../../components/HeaderAb";
// import { CheckBox } from '@rneui/themed';
// import CheckBox from 'react-native-check-box';
import Feather from 'react-native-vector-icons/Feather';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  const handleLogin = () => {
  };



  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      <HeaderAb title={'Log In'} />
     
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15 }}>
        <Image
          style={{ height: responsiveWidth(35), width: responsiveWidth(50), alignSelf: 'center' }}
          source={require('../../assets/images/1.png')}
        />
        <Image
          resizeMode="cover"
          style={{ height: responsiveWidth(20), width: responsiveWidth(40), alignSelf: 'center', marginTop: 20,borderBottomLeftRadius:20,borderTopRightRadius:20 }}
          source={require('../../assets/images/8.png')}
        />
        <View style={{ width: "100%", marginTop: responsiveHeight(4) }}>
          <View >
            <View style={styles.inputContainer}>
              <Feather style={{ marginLeft: responsiveWidth(2.5) }} name="mail" color={Colors.primary} size={responsiveWidth(6)} />
                <TextInput
                value={email}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setEmail(txt)}
                selectionColor={'#ccc'}
                placeholder="Email Address"
                placeholderTextColor={Colors.grey}
                style={styles.inputfild}
              />
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <View style={styles.inputContainer}>
              <Feather style={{ marginLeft: 10 }} name="lock" color={Colors.primary} size={responsiveWidth(6)} />
              <TextInput
                value={pass}
                cursorColor={Colors.primary}
                placeholderTextColor={Colors.grey}
                onChangeText={(pas) => setPass(pas)}
                placeholder="Password"
                secureTextEntry
                style={styles.inputfild}
              />
            </View>
            {/* <View style={{flexDirection:'row',alignItems:'center',marginTop:responsiveWidth(2.5)}}>
            <CheckBox
              style={{}}
              onClick={toggleCheckbox}
              isChecked={checked}
              checkBoxColor={Colors.primary}
              size={responsiveFontSize(2.5)}
            />
            <Text style={{color:'#555',fontFamily:'Nunito-Medium',fontSize:responsiveFontSize(1.8)}}> I accept <Text style={{color:Colors.primary,fontFamily:'Nunito-Medium'}}>Terms & Conditions</Text></Text>
            </View> */}
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Drawer')
                }}>
            <Text style={{ fontWeight: "normal", fontSize: responsiveFontSize(2.2), color: "#fff",fontFamily:'Oswald-Medium' }}>
              Log In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity  style={{ alignSelf: "center", marginTop: 20 }} onPress={() => {navigation.navigate('Forgot') }}>
            <Text style={{ color: "#555",fontFamily:'Nunito-Medium',fontSize:responsiveFontSize(1.8) }}>Forgot Password?</Text>
          </TouchableOpacity>
          <Text style={{ color: "#555", marginTop: 20, alignSelf: "center",fontFamily:'Nunito-Medium',marginBottom:10,fontSize:responsiveFontSize(1.8) }}>
            Don't have an account ?
            <Text
              onPress={() => navigation.navigate('Signup')}
              style={{ color: Colors.primary, marginTop: 10, fontWeight: 'bold' }}
            >
              {" "}
              Sign up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
)}

export default Login;