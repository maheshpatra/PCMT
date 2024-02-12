import React, { useState } from 'react'
import { Text, View, Alert, TextInput, FlatList, Image, ScrollView, StyleSheet, Modal, TouchableOpacity } from 'react-native'
  
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import Colors from '../../assets/colors';
import { ImageSlider } from "react-native-image-slider-banner";
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import styles from './style';
import Header from '../../components/Header';


const College = ({ navigation }) => {
  const [show, setShow] = useState(false)
  const [filter, setFilter] = useState(false)
  const [course, setCourse] = useState(false)

  const [activeTab, setActiveTab] = useState('UNPAID');

  const data1 = ['UNPAID',  'PAID'];

  const data = [
    {
      name: '5th Sem',
      image: 'https://picsum.photos/300/200',
      details: 'some description here for the course we offered soi ssde werz',
      due:'45 days'
    },
    {
      name: '6th Sem',
      image: 'https://picsum.photos/400/250',
      details: 'some description here for the course we offered soi ssde werz',
      due:'90 days'
    },
    {
      name: '7th Sem',
      image: 'https://picsum.photos/320/210',
      details: 'some description here for the course  we offered soi ssde werz',
      due:'120 days'
    },
    {
      name: '8th Sem',
      image: 'https://picsum.photos/350/220',
      details: 'some description here for the course we offered soi ssde werz',
      due:'150 days'
    }
  ]
  const data2 = [
    {
      name: '4th Sem',
      image: 'https://picsum.photos/300/200',
      details: 'some description here for the course we offered soi ssde werz'
    },
    {
      name: '3rd Sem',
      image: 'https://picsum.photos/400/250',
      details: 'some description here for the course we offered soi ssde werz'
    },
    {
      name: '2nd Sem',
      image: 'https://picsum.photos/320/210',
      details: 'some description here for the course  we offered soi ssde werz'
    },
    {
      name: '1st Sem',
      image: 'https://picsum.photos/350/220',
      details: 'some description here for the course we offered soi ssde werz'
    }
  ]
    
  return (
    <View style={{ flex: 1 }}>
       
      <Header navigation={navigation} />
      <View>
        <FlatList
          data={data1}
          horizontal={true}
          
          style={{ alignSelf: 'center',marginBottom:20  }}
          // keyExtractor={({item}) => item}
          renderItem={({ item }) => (
            <TouchableOpacity style={[styles.tabt, { backgroundColor:activeTab === item ? Colors.primary : undefined }]} onPress={() => setActiveTab(item)}>
              <Text style={[styles.tabText, { color: activeTab === item ? Colors.white : 'black' }]}>{item}</Text>
            </TouchableOpacity>
          )}
        />

      </View>
      
        { activeTab=='UNPAID' &&<View style={{ marginHorizontal: 10, marginTop: 10 }}>
          
         
          <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 10,color:'#555' }}>Un-Paid Fees</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,height:'82%' }}>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) =>
                <View style={styles.mainwraper}>
                  <Image
                    source={{uri: item.image}}
                    style={styles.image} />
                  <View style={{ marginLeft: 5, justifyContent: 'center' }}>
                    <Text style={styles.itemname}>{item.name}</Text>
                    <View style={styles.wraper}>
                      <Octicons name='location' size={20} color={Colors.primary} />
                      <Text numberOfLines={1} style={styles.itemdetails}>{item.details}</Text>
                    </View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Payment')}} style={styles.applybtn}>
                      <Text  style={styles.applytext}>Pay Now</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={{position:'absolute',top:0,right:0,backgroundColor:Colors.red,color:'#fff',paddingHorizontal:10,borderTopRightRadius:10,borderBottomLeftRadius:10}}>{item.due}</Text>
                </View>
              }/>
          </View>


        </View>}
        {activeTab=='PAID' &&
          <View style={{ marginHorizontal: 10, marginTop: 10 }}>
          
         
          <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 10,color:'#555' }}>Paid Fees</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,height:'82%' }}>
            <FlatList
              data={data2}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) =>
                <View style={styles.mainwraper}>
                  <Image
                    source={require('../../assets/images/tick.png')}
                    style={styles.image} />
                  <View style={{ marginLeft: 5, justifyContent: 'center' }}>
                    <Text style={styles.itemname}>{item.name}</Text>
                    <View style={styles.wraper}>
                      <Octicons name='location' size={20} color={Colors.primary} />
                      <Text numberOfLines={1} style={styles.itemdetails}>{item.details}</Text>
                    </View>
                    <TouchableOpacity onPress={() => {navigation.navigate('CollegeDetails')}} style={styles.applybtn}>
                      <Text  style={styles.applytext}>View Recipt</Text>
                    </TouchableOpacity>
                   
                  </View>
                </View>
              }/>
          </View>


        </View>}
     
    </View>
)}

export default College