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
// import { CheckBox } from '@rneui/themed';
import CheckBox from 'react-native-check-box';
import { responsiveFontSize, responsiveScreenWidth } from "react-native-responsive-dimensions";


const UpdatePass = ({ navigation }) => {

  const [oldpass, setOldpass] = useState('');
  const [newpass, setNewPass] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
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
  
   
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15 }}>
        <Image
          style={{ height: 130, width: 200, alignSelf: 'center' }}
          source={require('../../assets/images/1.png')}
        />
        <Image
          style={{ height: 70, width: 200, alignSelf: 'center', marginTop: 20 }}
          source={require('../../assets/images/logo.png')}
        />
        <View style={{ width: "100%", marginTop: 40 }}>
          <View >
            <View style={styles.inputContainer}>
              <Feather style={{ marginLeft: 10 }} name="lock" color={Colors.primary} size={responsiveScreenWidth(5.5)} />
              <TextInput
                value={oldpass}
                cursorColor={Colors.primary}
                onChangeText={(pas) => setOldpass(pas)}
                placeholder="Old Password"
                secureTextEntry
                placeholderTextColor={Colors.grey}
                style={styles.inputfild}
              />
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <View style={styles.inputContainer}>
              <Feather style={{ marginLeft: 10 }} name="lock" color={Colors.primary} size={responsiveScreenWidth(5.5)} />
              <TextInput
                value={newpass}
                cursorColor={Colors.primary}
                onChangeText={(pas) => setNewPass(pas)}
                placeholder="New Password"
                secureTextEntry
                placeholderTextColor={Colors.grey}
                style={styles.inputfild}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <View style={styles.inputContainer}>
                <Feather style={{ marginLeft: 10 }} name="lock" color={Colors.primary} size={responsiveScreenWidth(5.5)} />
                <TextInput
                  value={confirmpass}
                  cursorColor={Colors.primary}
                  onChangeText={(pas) => setConfirmpass(pas)}
                  placeholder="Confirm New Password"
                  secureTextEntry
                  placeholderTextColor={Colors.grey}
                  style={styles.inputfild}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.updatebtn}
            onPress={() => {
              navigation.navigate('Mytab')
            }}>
            <Text style={styles.updatetext}>
              Change Password
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default UpdatePass