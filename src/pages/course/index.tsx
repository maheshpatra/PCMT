import React, { useState } from 'react'
import { Text, View, Alert, TextInput, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
  
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Colors from '../../assets/colors';
import styles from './style';

const Course = ({ navigation }) => {
  const [show, setShow] = useState(false)
  const [filter, setFilter] = useState(false)
  const [course, setCourse] = useState(false)
  const menuClick = () => {
    setShow(!show)

  }
  const data = [
    {
      name: 'MBA',
      image: 'https://picsum.photos/300/200'
    },
    {
      name: 'Computer Science',
      image: 'https://picsum.photos/400/250'
    },
    {
      name: 'Merketing',
      image: 'https://picsum.photos/320/210'
    },
    {
      name: 'Data Science',
      image: 'https://picsum.photos/350/220'
    }
  ]


  return (
    <View style={styles.container}>
      
      <ScrollView>
        <View style={styles.wraper1}>
          <View>
            <Text style={styles.text1}>hello,</Text>
            <Text style={styles.text2}>Jhone Deo</Text>
          </View>

          <View style={styles.wraper2}>
            <View style={styles.wraper3}>
              <AntDesign name='search1' size={24} color={Colors.primary} />
              <TextInput cursorColor={Colors.primary} placeholder='Search Your Course'
                placeholderTextColor={'#999'}
              />
            </View>
             <TouchableOpacity onPress={()=>setFilter(true)} style={styles.wraper4}>
              <Fontisto style={{ transform: [{ rotate: '90deg' }] }} name='equalizer' size={24} color={Colors.primary} />
             </TouchableOpacity>
        </View>
          <Text style={styles.text3}>Choose your course</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <FlatList
              data={data}
              numColumns={2}
              renderItem={({ item }) =>
                <TouchableOpacity onPress={()=>{
                  navigation.navigate('CourseList')
                }} style={styles.wraper5}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={styles.itemimage}
                  />
                  <Text style={styles.text4}>{item.name}</Text>
                </TouchableOpacity>
              }/>
            </View>
          </View>
      </ScrollView>
    </View>

  )}

export default Course