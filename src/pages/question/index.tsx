import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity,FlatList } from 'react-native'
import Colors from '../../assets/colors'
import styles from './style'
import Feather from 'react-native-vector-icons/Feather';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import Header from '../../components/Header';

const Question = ({ navigation }) => {
  const [show, setShow] = useState(false)
  const [question, setQuestion] = useState('')
  
  const [tea, setTea] = useState('')
  
  const teacher =[
    "Amit Koley",
    "Suman Desai",
    "Manish Sing",
    "Liton Seth"
  ]
  

  return (
    <View style={{ flex: 1 }}>
     <Header navigation={navigation} />
      <View style={{ width: '93%', alignSelf: 'center' }}>
        <Text style={styles.title}>Enter Your Question</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={question}
            cursorColor={Colors.primary}
            onChangeText={(txt) => setQuestion(txt)}
            placeholder="Question"
            placeholderTextColor={Colors.grey}
            style={styles.inputfild}
            
          />
        </View>
        <TouchableOpacity onPress={()=>{
          setShow(!show)
        }} style={styles.inputContainer}>
          <Text style={{height:50,width:'100%',marginLeft:40,paddingTop:15,color:'#555'}}>{tea==''?'Select Teacher':tea}</Text>
          {show &&
          <FlatList
          data={teacher}
          renderItem={({item})=>
          <TouchableOpacity onPress={()=>{
            setTea(item)
            setShow(false)
          }} style={{width:'100%',padding:5}}>
            <Text style={{color:'#555',fontSize:14}}>{item}</Text>
          </TouchableOpacity>
          }
          />

          }
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitbtn}
          onPress={() => {}}>
          <Text style={{ fontWeight: "normal", fontSize: 17, color: "#fff" }}>
            Submit
          </Text>
        </TouchableOpacity>
        <View style={styles.wraper2}>
          <Text style={styles.txt4}>january 12,2023</Text>
          <Text style={styles.txt3}>what is charactors do you choose to ensure your safty ?</Text>
        </View>
        <View style={styles.wraper2}>
          <Text style={styles.txt4}>january 12,2023</Text>
          <Text style={styles.txt3}>what is charactors do you choose to ensure your safty ?</Text>
          <View style={styles.wraper1}>
            <Text style={styles.txt2}>reply - january 12,2023</Text>
            <Text style={styles.txt1}>hello dha iau iua jdlujal laj lajlkja lkja kjkjak lkal fhrlsd glkf' seoiu spsfnlkj fs</Text>
          </View>
        </View>
      </View>
    </View>

  )
}

export default Question