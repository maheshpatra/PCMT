import React,{useEffect} from 'react'
import { View, Text, TouchableOpacity, Alert,StatusBar,Image,Dimensions } from 'react-native'
import Colors from '../../assets/colors'
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DrawerActions } from '@react-navigation/native';


const ts = Dimensions.get('window').width / 100;
const Header = ({ navigation }) => {
    
  const [message, setMessage] = React.useState('');
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
        <View style={{ padding: 5, alignItems: 'center', height: 59, marginBottom: 10 }}>
        <StatusBar backgroundColor={'#F2F2F2'} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: ts * 2, marginTop: 10 }}>
          <TouchableOpacity style={{ justifyContent: 'center', marginLeft: ts * 2.5, }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>

            <View style={{ elevation: 5, borderColor: 'tomato', padding: 3, backgroundColor: '#fff', borderRadius: ts * 3 }}>
              <Image
                style={{ height: ts * 9.5, width: ts * 9.5, borderRadius: ts * 2, borderWidth: 2, borderColor: Colors.primary }}
                source={{
                  uri: 'https://picsum.photos/id/237/200/200'
                }}

              />
            </View>
          </TouchableOpacity>
          <View style={{ position: 'absolute', left: ts * 18 }}>
            <Text style={{ fontSize: ts * 5.4, fontWeight: 'bold', color: Colors.primary }}>{'Hii Mahesh'}</Text>
            <Text style={{ fontSize: ts * 3.5,color:'#555' }}>{message}</Text>
          </View>


          <TouchableOpacity style={{ justifyContent: 'center', marginRight: ts * 2.5, }} onPress={() => navigation.navigate("Notifications")}>
            <View style={{ elevation: 5, borderColor: 'tomato', padding: 5, backgroundColor: '#fff', borderRadius: ts * 3, }}>
              <Ionicons name="notifications-outline" size={ts * 7.5} color={Colors.primary} />
            </View>
          </TouchableOpacity>
        </View>


      </View>
    )
}

export default Header