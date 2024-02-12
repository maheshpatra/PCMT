import React, { useState } from 'react'
import { Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import Colors from '../../assets/colors';
import styles from './style';
import { responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
const AppliedCollege = ({ navigation }) => {
  const [show, setShow] = useState(false)
  const [showOption, setshowOption] = useState(false)
  const [course, setCourse] = useState(false)



  const data = [
    {
      name: 'MBA',
      image: 'https://picsum.photos/300/200',
      details: 'some description here for the course we offered soi ssde werz'
    },
    {
      name: 'Computer Science',
      image: 'https://picsum.photos/400/250',
      details: 'some description here for the course we offered soi ssde werz'
    },
    {
      name: 'Merketing',
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
                source={{
                  uri: item.image,
                }}
                style={{ height: responsiveScreenWidth(20), width: responsiveScreenWidth(20), borderRadius: 7, marginVertical: 6, marginLeft: 10 }}
              />
              <View style={{ marginLeft: 5, justifyContent: 'center' }}>
                <Text style={styles.itemname}>{item.name}</Text>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center', marginTop: 5, marginLeft: 10}}>
                  <Octicons name='location' size={responsiveWidth(3.5)} color={Colors.primary} />
                  <Text numberOfLines={1} style={styles.itemdetails}>{item.details}</Text>
                </View>
                <TouchableOpacity onPress={() => setshowOption(true)}>
                  <Text style={styles.itemutn}>Enter UTN No</Text>
                </TouchableOpacity>
              </View>
            </View>
          }/>
      </View>
    </View>

)}

export default AppliedCollege