import React, { useEffect, useState } from 'react'
import { Text, View, Alert, Dimensions, TextInput, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native'
import { DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../assets/colors';
import styles from './style';
import Header from '../../components/Header';


const ts = Dimensions.get('window').width / 100;
const LiveClass = ({ navigation }) => {
  const [show, setShow] = useState(false)

  const [message, setMessage] = React.useState('');

  const expand =() =>{
    setShow(!show)
  }

  const data = [
    {
      name: 'Financia Accounting.',
      details: 'An mabd sjkh aoioa oiao sgoldhgas,ljl lasklksud dsjh sdh sjgdg fkjsd flkjs sljs flhsgf ',
      date: '7 may',
      time: '10:00 AM'
    }
  ]
  function good() {
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
      setMessage('Good Morning !')

    } else if (curHr < 18) {
      setMessage('Good Afternoon !')

    } else {
      setMessage('Good Evening !')

    }
  }

  useEffect(() => {
    good()
  }, [])



  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      
      <Text style={styles.txt3}>Your Class </Text>
      <View style={styles.social}>

        <FlatList
          data={data}
          renderItem={({ item }) =>
            <View style={styles.wraper}>
              <View style={styles.wraper2}>
                <Text style={styles.txt1}>{item.name}</Text>
                <Text style={styles.txt2}>{item.details}</Text>
                 { show &&
                  <View>
                    <Text style={styles.txt3}>Your Lecturer  </Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>

                    <Image
                      source={{
                        uri: 'https://picsum.photos/320/210',
                      }}
                      style={{ height: 50, width: 50, borderRadius: 30, marginTop: 6, marginLeft: 10 }}
                    />

                    <View style={{  }}>
                      <Text style={styles.txt3}>Name: <Text style={{ fontFamily: 'Nuito-medium', color: Colors.primary }}> John Deo</Text></Text>
                      <Text style={styles.txt4}>Designation : <Text style={{ fontFamily: 'Nuito-medium', color: Colors.primary }}>Computer Science</Text> </Text>
                      
                    </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', marginBottom: 10,justifyContent:'space-between',marginTop:10,alignSelf:'flex-start' }}>
                  <Text style={styles.txt3}>Today's Chapter</Text>
                  <Text style={styles.txt4}>Room Number <Text style={{ fontFamily: 'Nuito-medium', color: Colors.red }}>301</Text></Text> 
                </View>
                <Text style={styles.txt2}>{item.details}</Text>
                   

                  </View>

                }
                <View style={{ flexDirection: 'row', width: '90%', marginBottom: 10 }}>
                  <Text style={styles.txt3}>Date <Text style={{ fontFamily: 'Nuito-medium', color: Colors.red }}>{item.date}</Text></Text>
                  <Text style={styles.txt4}>Time  <Text style={{ fontFamily: 'Nuito-medium', color: Colors.red }}>{item.time}</Text> </Text>
                  <AntDesign name={!show?"down":'up'} onPress={expand} style={{ position: 'absolute', right: 0,padding:5 }} size={ts * 6} color={Colors.primary} />
                </View>

                <Text style={styles.txt6}>Class Started</Text>
              </View>


            </View>
          } />
      </View>
    </View>
  )
}

export default LiveClass