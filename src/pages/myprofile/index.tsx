import React,{useState} from 'react'
import { Text, View,Image,TouchableOpacity } from 'react-native'
import Colors from '../../assets/colors'


import styles from './style'
import { responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import Header from '../../components/Header'

const MyProfile = ({navigation}) => {

  const [show, setShow] = useState(false)
  const menuClick = () => {
    setShow(!show)

  }
  return (
    <View style={styles.container}>
      <Header
       navigation={navigation}
       />
      <View style={styles.wraper}>
        <Image
          source={{
            uri: 'https://picsum.photos/500/220',
          }}
          style={{ height: responsiveScreenWidth(22), width: responsiveScreenWidth(22), borderRadius: responsiveScreenWidth(11), alignSelf: 'center', marginTop: responsiveWidth(2.5), }}/>
      <Text style={styles.name}>Mahesh Patra</Text>
        <View style={styles.textview}>
          <Text style={styles.text} numberOfLines={1}>Name</Text>
          <Text style={styles.text} numberOfLines={1}>Mahesh patra</Text>
        </View>
        <View style={styles.textview}>
          <Text style={styles.text} numberOfLines={1}>Email</Text>
          <Text style={styles.text} numberOfLines={1}>maheshpatra@gmail.com</Text>
        </View>
        <View style={styles.textview}>
          <Text style={styles.text} numberOfLines={1}>Contact Number</Text>
          <Text style={styles.text} numberOfLines={1}>12345678</Text>
        </View>
        <View style={styles.textview}>
          <Text style={styles.text} numberOfLines={1}>Address</Text>
          <Text style={styles.text} numberOfLines={1}>Kolkata 700011,mg road</Text>
        </View>
        <View style={styles.textview}>
          <Text style={styles.text} numberOfLines={1}>Age </Text>
          <Text style={styles.text} numberOfLines={1}>25</Text>
        </View>
      </View>
      <TouchableOpacity
          style={styles.updatebtn}
          onPress={() => {

          }}>
          <Text style={{ fontWeight: "normal", fontSize: 15, color: "#fff" }}>
            Update Profile
          </Text>
        </TouchableOpacity>
      </View>
)}

export default MyProfile