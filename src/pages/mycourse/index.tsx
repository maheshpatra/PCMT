import React, { useState } from 'react'
import { Text, View, Alert, TextInput, FlatList, Image, ScrollView, StyleSheet, Modal } from 'react-native'
  
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Colors from '../../assets/colors';
import { ImageSlider } from "react-native-image-slider-banner";
import styles from './style';
import Header from '../../components/Header';


const MyCourse = ({ navigation }) => {
  const [show, setShow] = useState(false)
  const menuClick = () => {
    setShow(!show)
  }
  const [course, setCourse] = useState(false)
  const [openDetails, setOpenDetails] = useState(false)

  const data = [
    {
      name: 'DBA',
      image: 'https://picsum.photos/300/200',
      details: 'some description here for the course we offered soi ssde werz'
    },
    {
      name: 'Database Management',
      image: 'https://picsum.photos/400/250',
      details: 'some description here for the course we offered soi ssde werz'
    },
    {
      name: 'Matchine Learning',
      image: 'https://picsum.photos/320/210',
      details: 'some description here for the course  we offered soi ssde werz'
    },
    {
      name: 'Artificial Intlegence',
      image: 'https://picsum.photos/350/220',
      details: 'some description here for the course we offered soi ssde werz'
    }
  ]
  const itemClick = () => {
    navigation.navigate('Forgot');

  }
  return (
    <View style={styles.container}>
   <Header navigation={navigation} />
   <Text style={styles.text1}>Class Notes</Text>
      <ScrollView>
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <FlatList
              data={data}
              renderItem={({ item }) =>
                <View style={{ width: '100%', height: 110, backgroundColor: '#fff', borderRadius: 5, marginRight: 30, marginBottom: 15, flexDirection: 'row' }}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={{ height: 60, width: 60, borderRadius: 7, marginTop: 6, marginLeft: 10 }}
                  />
                  <View style={{ marginTop: 8, marginLeft: 5 }}>
                    <Text style={styles.text1}>{item.name}</Text>
                    <Text style={styles.text2}>C.S.E</Text>
                    <Text style={styles.text3} numberOfLines={2}>{item.details}</Text>
                    <View style={{ flexDirection: 'row', width: '70%' }}>
                      <Text onPress={() => {navigation.navigate('MyCourseDetails')}} style={{ fontWeight: 'bold', color: Colors.primary, fontSize: 12,  marginLeft: 10, padding: 3 }}>View Detsils</Text>
                    </View>
                    </View>
                </View>
              }/>
          </View>
        </View>
      </ScrollView>
    </View>
  )}

export default MyCourse

