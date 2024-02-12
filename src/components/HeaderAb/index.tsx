import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import Colors from '../../assets/colors'
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HeaderAb = ({ menuClicks,title,icon }) => {

    return (
        <View style={{ height: 59, width: '100%', backgroundColor: Colors.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15 }}>
           
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:16,letterSpacing:.5}}>{title}</Text>
            

        </View>
    )
}

export default HeaderAb