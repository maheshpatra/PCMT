import React, { useState } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import styles from './style'
import Colors from '../../assets/colors'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign';

const Ca = ({ navigation }) => {
  const [show, setShow] = useState(false)
  const menuClick = () => {
    setShow(!show)

  }
  return (
    <View style={styles.container}>
     
      <TouchableOpacity 
      
      style={styles.textwraper}>
        <Text style={styles.desc}>
          PLease Upload Your CA File 
           </Text>
           <AntDesign name={'plus'} style={{ alignSelf:'center',padding:10,borderWidth:1,borderColor:'#555',borderRadius:10}} size={responsiveFontSize(5)} color={Colors.grey} />
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.updatebtn}
          onPress={() => {

          }}>
          <Text style={{ fontWeight: "normal", fontSize: 15, color: "#fff" }}>
            Upload
          </Text>
        </TouchableOpacity>
    </View>

  )
}

export default Ca