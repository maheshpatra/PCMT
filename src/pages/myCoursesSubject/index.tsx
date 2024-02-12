import React, { useState } from 'react'
import { Text, View, Alert, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
  
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Colors from '../../assets/colors';
import { ImageSlider } from "react-native-image-slider-banner";
import CourseList from '../../components/CourseList';
import CourseListDetails from '../../components/CourseListDetails';

const MyCoursesSubject = ({ navigation }) => {
  const [show, setShow] = useState(false)

    
  const pdf = [
    {
      name:'Chapter One',
      color:'#4886FF',
      icon:'#A5C4FF'
  
    },
    {
      name:'Chapter Two',
      color:'#FF505D',
      icon:'#FFA9B0'
  
    }, {
      name:'Chapter One',
      color:'#FFAD3D',
      icon:'#FFD7A0'
  
    }, {
      name:'Chapter Two',
      color:'#544DF3',
      icon:'#ABA8F9'
  
    }
    
  ]
  



  return (
    <View style={{ flex: 1, backgroundColor: '#ddd' }}>
      
      <View style={{ height: '100%', width: '95%', alignSelf: 'center', marginTop: 10, }}>
        <View style={{ backgroundColor: '#fff', borderRadius: 5, marginTop: 10 }}>
          <FlatList
            data={pdf}
            numColumns={2}
            contentContainerStyle={{}}
            style={{ marginTop: 10, paddingBottom: 10 }}
            renderItem={({ item,index }) =>
              <TouchableOpacity style={{ height: 130, width: '45%', alignSelf: 'center', borderWidth: 1, marginBottom: 5, justifyContent: 'center', borderColor: '#ccc', borderRadius: 4,  alignItems: 'center', paddingHorizontal: 8,marginHorizontal:9,marginTop:10,backgroundColor:item.color }}>
                <AntDesign name={index>1?'videocamera':'pdffile1'} style={{paddingHorizontal:15,paddingVertical:10,backgroundColor:item.icon,borderRadius:6}} color={Colors.white} size={50} />
                <Text style={{ fontFamily: "Nunito-Medium", color: Colors.white , fontSize: 15, fontWeight: '800',marginTop:10 }}>{item.name}</Text>
                {/* <AntDesign name='right' color={Colors.grey} size={12} /> */}
              </TouchableOpacity>}/>
        </View>
      </View>
    </View>
)}

export default MyCoursesSubject