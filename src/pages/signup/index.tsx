import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image, FlatList,ScrollView
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Colors from "../../assets/colors";
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [confirm, setconfirm] = useState('');
  
  const data = [
    { id: 'student', label: 'Student' },
    { id: 'faculty', label: 'Faculty' },
  ];

  const handleSignup = () => {};
  const [selectedOption, setSelectedOption] = useState('student'); // State to keep track of the selected option

  const handleOptionSelect = (id) => {
    setSelectedOption(id);
  };
  const RadioButton = ({ label, selected, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
        <Icon
          name={selected ? 'dot-circle-o' : 'circle-o'} // Icon names can vary based on the icon library you choose
          size={20}
          color={selected ? Colors.primary : 'gray'}
        />
        <Text style={{ marginLeft: 10,fontFamily:'Nunito-Medium',color:'#555' }}>{label}</Text>
      </TouchableOpacity>
    );
  };




  return (
    <View
      style={styles.container}
    >
      
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15 }}>
        <Image
          style={{ height: responsiveWidth(35), width: responsiveWidth(50), alignSelf: 'center' }}
          source={require('../../assets/images/1.png')}/>
        <Image
        resizeMode="contain"
          style={{ height: responsiveWidth(15), width: responsiveWidth(40), alignSelf: 'center', marginTop: 20,backgroundColor:Colors.primary,borderBottomLeftRadius:20,borderTopRightRadius:20 }}
          source={require('../../assets/images/logo1.png')}/>
        <View style={{ width: "100%", }}>
          <View style={{ marginTop: 15 }}>
            <View style={{marginVertical:15,justifyContent:'center'}}>
            <FlatList
              data={data}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <RadioButton
                  label={item.label}
                  selected={selectedOption === item.id}
                  onPress={() => handleOptionSelect(item.id)}
                />)}/>
            </View>
            <View style={styles.inputContainer}>
              <TouchableOpacity style={{ marginLeft: 10 }} >
                <Feather name="user" color={Colors.primary} size={responsiveWidth(6)} />
              </TouchableOpacity>
              <TextInput
                value={name}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setName(txt)}
                placeholder={selectedOption=='college'?'College Name':'Name'}
                placeholderTextColor={Colors.grey}
                style={styles.inputfild}
              />
            </View>
            <View style={styles.inputContainer}>
              <TouchableOpacity style={{ marginLeft: 10 }} >
                <Feather name="mail" color={Colors.primary} size={responsiveWidth(6)} />
              </TouchableOpacity>
              <TextInput
                value={email}
                placeholderTextColor={Colors.grey}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setEmail(txt)}
                placeholder="Email Id"
                style={styles.inputfild}
              />
            </View>
            <View style={styles.inputContainer}>
              <TouchableOpacity style={{ marginLeft: 10 }} >
                <Feather name="phone" color={Colors.primary} size={responsiveWidth(6)} />
              </TouchableOpacity>
              <TextInput
                value={number}
                placeholderTextColor={Colors.grey}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setNumber(txt)}
                placeholder="Contact No"
                style={styles.inputfild}
              />
            </View>
            <View style={styles.inputContainer}>
              <TouchableOpacity style={{ marginLeft: 10 }} >
                <Feather name="map" color={Colors.primary} size={responsiveWidth(6)} />
              </TouchableOpacity>
              <TextInput
                value={address}
                cursorColor={Colors.primary}
                placeholderTextColor={Colors.grey}
                onChangeText={(txt) => setAddress(txt)}
                placeholder="Address"
                style={styles.inputfild}
              />
            </View>
            {selectedOption=='student' &&<View style={styles.inputContainer}>
              <TouchableOpacity style={{ marginLeft: 10 }} >
                <AntDesign name="calendar" color={Colors.primary} size={responsiveWidth(6)} />
              </TouchableOpacity>
              <TextInput
                value={age}
                cursorColor={Colors.primary}
                placeholderTextColor={Colors.grey}
                onChangeText={(txt) => setAge(txt)}
                placeholder="Age"
                style={styles.inputfild}/>
              </View>}
            <View style={styles.inputContainer}>
              <TouchableOpacity style={{ marginLeft: 10 }} >
                <Feather name="lock" color={Colors.primary} size={responsiveWidth(6)} />
              </TouchableOpacity>
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
          </View>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={{ marginLeft: 10 }} >
              <Feather name="lock" color={Colors.primary} size={responsiveWidth(6)} />
            </TouchableOpacity>
            <TextInput
              value={confirm}
              cursorColor={Colors.primary}
              placeholderTextColor={Colors.grey}
              onChangeText={(pas) => setconfirm(pas)}
              placeholder="Confirmed Password"
              secureTextEntry
              style={styles.inputfild}
            />
          </View>
          <TouchableOpacity
            style={styles.signupbtn}
            onPress={() => {
              navigation.navigate('Mytab')
            }}>
            <Text style={{ fontWeight: "normal", fontSize: responsiveFontSize(2.2), color: "#fff",fontFamily:'Oswald-Medium' }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "#555", marginTop: 20, alignSelf: "center", marginBottom: 20,fontFamily:'Nunito-Medium' }}>
            Aready have an account ?
            <Text
              onPress={() => { navigation.navigate('Login') }}
              style={{ color: Colors.primary, marginTop: 10, fontWeight: 'bold',fontFamily:'Nunito-Medium' }}
            >
              {" "}
              Log In
            </Text>
          </Text>
      </View>
    </ScrollView>
  </View>
)}

export default Signup;