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
import Feather from 'react-native-vector-icons/Feather';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import HeaderAb from "../../components/HeaderAb";


const Forgot = ({navigation}) => {
  const [email, setEmail] = useState('');
 
  return (
    <View
      style={{
        flex: 1, backgroundColor: "#fff",
      }}>
        <HeaderAb title={'Forgot'} />
      
      <ScrollView style={{ marginHorizontal: 15 }}>
        <Image
          style={{ height: responsiveWidth(45), width: responsiveWidth(45), alignSelf: 'center', marginTop: 10 }}
          source={require('../../assets/images/2.png')}
        />
        <Image
           resizeMode="contain"
           style={{ height: responsiveWidth(15), width: responsiveWidth(40), alignSelf: 'center', marginTop: 20,backgroundColor:Colors.primary,borderBottomLeftRadius:20,borderTopRightRadius:20 }}
            source={require('../../assets/images/logo1.png')}
        />
        <View style={{ width: "100%", marginTop: 15 }}>
          <View >
            <View style={styles.inputContainer}>
              <Feather style={{ marginLeft: responsiveWidth(2.5) }} name="mail" color={Colors.primary} size={responsiveWidth(6)} />
              <TextInput
                value={email}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setEmail(txt)}
                placeholder="Email Address"
                style={styles.inputfild}
                placeholderTextColor={Colors.grey}
              />
            </View>
          </View>
          <View style={{ marginTop: 15 }}></View>
          <TouchableOpacity
            style={styles.submitbtn}
            onPress={() => {
              navigation.navigate('Mytab')
            }}>
            <Text style={styles.submittxt}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

)}

export default Forgot