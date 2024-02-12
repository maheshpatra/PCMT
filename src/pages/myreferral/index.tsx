import React, { useState } from 'react'
import { Text, View, Alert, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
  
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../assets/colors';
import { ImageSlider } from "react-native-image-slider-banner";
import CourseList from '../../components/CourseList';
import CourseListDetails from '../../components/CourseListDetails';
import Modal from "react-native-modal";
import styles from './style';

const MyReferral = ({ navigation }) => {
  const [show, setShow] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
    
  const data = [
    {
      name: 'Ananta Hazra',
      details: 'An mabd sjkh aoioa oiao sgoldhgas,ljl lasklksud dsjh sdh sjgdg fkjsd flkjs sljs flhsgf ',
      date: '7/20/23',
      status: 'join'
    },
    {
      name: 'Bijoy koley',
      details: 'An mabd sjkh aoioa oiao sgoldhgas,ljl lasklksud dsjh sdh sjgdg fkjsd flkjs sljs flhsgf ',
      date: '7/20/23',
      status: 'join'
    },
    {
      name: 'Ajay Maity',
      details: 'An mabd sjkh aoioa oiao sgoldhgas,ljl lasklksud dsjh sdh sjgdg fkjsd flkjs sljs flhsgf ',
      date: '7/20/23',
      status: 'join'
    }
  ]
  return (
    <View style={styles.container}>
       
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, width: '92%', alignSelf: 'center', marginTop: 15 }}>
        <Text style={styles.refertext}>My Referral Code </Text>
        <Text style={styles.refercode}>QjdSed345</Text>
      </View>
    <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: '100%', width: '92%', alignSelf: 'center', }}>
        <View style={{ padding: 10, backgroundColor: '#fff', borderRadius: 6, marginTop: 15 }}>
          <View>
           <View style={{ width: '100%' }}>
              <FlatList
                ListHeaderComponent={() =>
                  <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                    <View style={styles.namecontainer}>
                      <Text style={styles.text}>Name</Text>
                    </View>
                    <View style={styles.datecontainer}>
                      <Text style={styles.text}>Date</Text>
                    </View>
                    <View style={styles.statuscontainer}>
                      <Text style={styles.text}>Status</Text>
                    </View>
                  </View>
                  }
                data={data}
                renderItem={({ item }) =>
                  <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={styles.namecontainer}>
                      <Text style={styles.text1}>{item.name}</Text>
                    </View>
                    <View style={styles.datecontainer1}>
                      <Text style={styles.text2}>{item.date}</Text>
                    </View>
                    <View style={styles.statuscontainer1}>
                      <Text style={styles.text3}>{item.status}</Text>
                    </View>
                  </View>
                }/>
            </View>
          </View>
        </View>
      </ScrollView>
  </View>
)}

export default MyReferral