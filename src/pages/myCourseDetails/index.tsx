import React, { useState } from 'react'
import { Text, View, Alert, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
  
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Colors from '../../assets/colors';
import { ImageSlider } from "react-native-image-slider-banner";
import styles from './style';

const MyCourseDetails = ({ navigation }) => {
  const [show, setShow] = useState(false)

  const menuClick = () => {
    setShow(!show)
  }
 
  const data = [
    'Financia Accounting.',
    'Cost Accounting',
    'Fundamental Accounting'


  ]

return (
    <View style={styles.container}>
    
      <View style={{ 
        height: '100%', 
        width: '93%', 
        alignSelf: 'center', 
        marginTop: 10, }}>
        <View style={{ backgroundColor: '#fff', borderRadius: 5 }}>
          <Image
            source={{
              uri: 'https://picsum.photos/500/220',
            }}
            style={styles.imagestyle}/>
          <Text style={styles.text1}>Matchine Learning</Text>
          <Text style={styles.text2}>MBA</Text>
          <Text style={styles.textDesc}>Niuno quale manifesta della e dea. Della niuna porgere 'l nel sí impetrata. In di procuratori da nel noi quali suo lui della. Sí bene e il quale, siamo in per che sogiacere vostro carissime e gli siamo. Speranza al fa da mortali nostri in. Con come manifestamente ora sé,.</Text>
        </View>
        <View style={styles.itemwraper}>
          <Text style={styles.listHeader}>List of Notes</Text>
          <FlatList
            data={data}
            style={{ marginTop: 10, paddingBottom: 10 }}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={() => {
                navigation.navigate('MyCoursesSubject')
              }} style={styles.itembtn}>
                <Text style={styles.itemtext}>{item}</Text>
                <AntDesign name='right' color={Colors.grey} size={12} />
              </TouchableOpacity>}/>
        </View>
      </View>
    </View>
)}

export default MyCourseDetails