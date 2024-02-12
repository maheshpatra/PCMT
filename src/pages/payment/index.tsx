import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Colors from '../../assets/colors'
import styles from './style'
import Feather from 'react-native-vector-icons/Feather';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

const Payment = ({ navigation }) => {
  const [show, setShow] = useState(false)
  const [question, setQuestion] = useState('')
  const menuClick = () => {
    setShow(!show)

  }
  

  return (
    <View style={{ flex: 1 }}>
      
      <View style={{ width: '93%', alignSelf: 'center',justifyContent:'center',alignItems:'center',height:'90%' }}>
        <Text onPress={()=>{
          navigation.navigate('Paysucess',{type:'payment'})
        }} style={{fontWeight:'bold',fontSize:20,color:'#555'}}>Pay now</Text>

      </View>
    </View>

)}

export default Payment