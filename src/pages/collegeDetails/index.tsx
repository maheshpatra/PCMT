import React, { useState } from 'react'
import { Text, View, Alert, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../assets/colors';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import styles from './style';


const CollegeDetails = ({ navigation }) => {
  const [show, setShow] = useState(false)
  const [showOption, setshowOption] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false);
  const [selecta, setSelecta] = useState('');

  const toggleModal = () => {
    setshowOption(!showOption);
  };
    
  const data = [
    {
      name: 'Mba Financia Accounting.',
      details: 'An mabd sjkh aoioa oiao sgoldhgas,ljl lasklksud dsjh sdh sjgdg fkjsd flkjs sljs flhsgf ',
      date: '7 may',
      time: '10:00 AM',
      fee: 30000,
      discount: 1000,
      minimum: 2000,
      sit: 3
    },
    {
      name: 'Mba general menagement',
      details: 'An mabd sjkh aoioa oiao sgoldhgas,ljl lasklksud dsjh sdh sjgdg fkjsd flkjs sljs flhsgf ',
      date: '7 may',
      time: '10:00 AM',
      fee: 30000,
      discount: 1000,
      minimum: 3000,
      sit: 4
    },
    {
      name: 'Mba human resource management',
      details: 'An mabd sjkh aoioa oiao sgoldhgas,ljl lasklksud dsjh sdh sjgdg fkjsd flkjs sljs flhsgf ',
      date: '7 may',
      time: '10:00 AM',
      fee: 30000,
      discount: 1000,
      minimum: 2000,
      sit: 7
    }
  ]



  return (
    <View style={styles.container}>
       
    <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.wraper}>
        <View style={{ backgroundColor: '#fff', borderRadius: 5 }}>
          <Image
            source={{
              uri: 'https://picsum.photos/500/220',
            }}
            style={styles.image}/>
          <Text style={styles.txt1}>Mumbai chandra college rai</Text>
          <View style={styles.txt2}>
            <Feather name='map-pin' color={Colors.primary} size={14} />
            <Text style={styles.txt3} numberOfLines={1}>Scemem the ez uiraga ualmun hioll, syrolmol halal nequem hioll.</Text>
          </View>
          <Text style={styles.txt4}>College</Text>
          <Text style={styles.txt5}>Niuno quale manifesta della e dea. Della niuna porgere 'l nel sí impetrata. In di procuratori da nel noi quali suo lui della. Sí bene e il quale, siamo in per che sogiacere vostro carissime e gli siamo. Speranza al fa da mortali nostri in. Con come manifestamente ora sé,.</Text>
        </View>
        <View style={styles.wraper1}>
        <Text style={styles.txt6}>Bank Details</Text>
          <View style={styles.wraper2}>
            <Text style={styles.txt7} numberOfLines={1}>Bank account number</Text>
            <Text style={styles.txt8} numberOfLines={1}>123456789</Text>
          </View>
          <View style={styles.wraper2}>
            <Text style={styles.txt7} numberOfLines={1}>IFSC code </Text>
            <Text style={styles.txt8} numberOfLines={1}>123456789</Text>
          </View>
          <View style={styles.wraper2}>
            <Text style={styles.txt7} numberOfLines={1}>Bank name</Text>
            <Text style={styles.txt8} numberOfLines={1}>SBI</Text>
          </View>
          <View style={styles.wraper2}>
            <Text style={styles.txt7} numberOfLines={1}></Text>
            <Text style={styles.txt8} numberOfLines={1}>Kolkata</Text>
          </View>
        </View>
        <View style={styles.wraper3}>
          <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            style={{}}>
            <View>
              <FlatList
                contentContainerStyle={{}}
                ListHeaderComponent={() =>
                  <View style={styles.wraper4}>
                    <View style={{ width: 300 }}>
                      <Text style={styles.txt9}>List of courses</Text>
                    </View>
                    <View style={{ width: 100 }}>
                      <Text style={styles.txt9}>Courses Fees</Text>
                    </View>
                    <View style={{ width: 100 }}>
                      <Text style={styles.txt9}>Discount</Text>
                    </View>
                    <View style={{ width: 200 }}>
                      <Text style={styles.txt9}>Minimum Booking fees</Text>
                    </View>
                    <View style={{ width: 100 }}>
                      <Text style={styles.txt9}>Allocate Sit</Text>
                    </View>
                  </View>}
                data={data}
                renderItem={({ item }) =>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 300, marginVertical: 10, }}>
                      <Text style={{ color: '#555',fontFamily:'Nunito-Medium' }}>{item.name}</Text>
                    </View>
                    <View style={{ width: 100, marginVertical: 10 }}>
                      <Text style={{ color: '#555',fontFamily:'Nunito-Medium' }}>{item.fee}</Text>
                    </View>
                    <View style={{ width: 100, marginVertical: 10 }}>
                      <Text style={{ color: 'green' }}>{item.discount}</Text>
                    </View>
                    <View style={{ width: 200, marginVertical: 10 }}>
                      <Text style={{ color: 'orange' }}>{item.minimum}</Text>
                    </View>
                    <View style={{ width: 100, marginVertical: 10 }}>
                      <Text style={{ color: Colors.primary }}>{'(' + item.sit + ')'}</Text>
                    </View>
                  </View>}/>
              </View>
          </ScrollView>
        </View>
        <TouchableOpacity onPress={toggleModal} style={{ backgroundColor: Colors.secondary, width: '100%', height: 40, marginBottom: 20, alignItems: 'center', justifyContent: 'center', marginTop: 15, borderRadius: 6 }}>
          <Text style={{ color: Colors.white, fontFamily: 'Nunito-Medium' }}>Apply Now</Text>
        </TouchableOpacity>
    </ScrollView>
  
  </View>

)}

export default CollegeDetails