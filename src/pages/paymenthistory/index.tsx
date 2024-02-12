import React, { useState } from 'react'
import { Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native'
  
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import Colors from '../../assets/colors';
import styles from './style';
import { responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
const PaymentHistory = ({ navigation }) => {
  const [show, setShow] = useState(false)
  const [course, setCourse] = useState(false)



  const data = [
    {
      name: 'STSA CARD',
      image: 'https://picsum.photos/300/200',
      details: 'some description here for the course we offered soi ssde werz'
    },
    {
      name: 'Computer PAYMENT',
      image: 'https://picsum.photos/400/250',
      details: 'some description here for the course we offered soi ssde werz'
    },
    {
      name: 'UPI payment ',
      image: 'https://picsum.photos/320/210',
      details: 'some description here for the course  we offered soi ssde werz'
    },
    {
      name: 'Data Science',
      image: 'https://picsum.photos/350/220',
      details: 'some description here for the course we offered soi ssde werz'
    }
  ]
  const menuClick = () => {
    setShow(!show)

  }
  return (
    <View style={styles.container}>
     
      <View style={styles.wraper}>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <View style={styles.itemwraper}>
              <Image
                source={{uri: item.image}}
                style ={{ height: responsiveScreenWidth(18), width: responsiveScreenWidth(18), borderRadius: 7, marginVertical: 6, marginLeft: 10 }}/>
              <View style={{ marginLeft: 5,width:'100%',marginTop:10, }}>
                <Text style={styles.itemname}>{item.name}</Text>
                <View style={styles.wraper3}>
                  <Text style={{color:'#555',fontFamily:'Nunito-Medium'}}>7th may</Text>
                  <Text numberOfLines={1} style={styles.itemprice}>{'$20'}</Text>
                </View>
              </View>
            </View>
             }
        />
     </View>
    </View>

  )
}

export default PaymentHistory