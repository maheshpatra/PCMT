// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React,{useEffect,useState} from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
    Pressable,
    Dimensions,TouchableOpacity
} from 'react-native';
import Svg, {
    G,
    Path,
    Defs,
    Mask,
    LinearGradient,
    Stop
} from "react-native-svg"

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Svvg from '../Svg';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Colors from '../../assets/colors';

const ts = Dimensions.get('window').width / 100;
const CustomSidebarMenu = (props) => {
    const BASE_PATH =
        'https://picsum.photos/200';
    const proileImage = 'react_logo.png';
    const [userdata, setuserdata] = useState({});
    const [status, setStatus] = useState(null);


    // useEffect(() => {
    //     _retrieveData("USER_DATA").then((userdata) => {
            
    //         if(userdata !== 'error'){
    //             setuserdata(userdata);
    //              getStatus(userdata.userid)
    //              console.log(userdata)
    //             //setStatus(userdata.ustatus)

    //         }
           
    //     });
    // },[])


    // useFocusEffect(
    //     React.useCallback(() => {
    //         _retrieveData("USER_DATA").then((userdata) => {
    //             // console.log(user_mobile);
    //             if (userdata !== 'error') {
    //                 getStatus(userdata.userid)
    //             }
    
    
    //         });
    //     }, [])
    //   );

//     function getStatus(id){
//         const bodyContent = new FormData();
//         bodyContent.append("case", "get_status");
//         bodyContent.append("userId", id);
//         fetch("https://gamerpatra.000webhostapp.com/appapi/login.php", {
//             method: "post",
//             body: bodyContent,
//         })
//             .then((data) => data.json())
//             .then((resp) => {
//                  const a=JSON.stringify(resp.status)
                
//                     setStatus(resp.status)
//                     // console.log(JSON.stringify(resp.status))
            
// //   console.log(resp)
//             })

//     }

// console.log(props.navigation)
    return (
        <View style={{ flex: 1, }}>



            <View style={{ backgroundColor: '#fff', paddingVertical: 20}}>
                <TouchableOpacity  style={{ justifyContent: 'center', marginLeft: ts * 5 }}>
                    <TouchableOpacity onPress={()=>{
                    console.log('stop')
                }} style={{ elevation: 5, borderColor: 'tomato', padding: 6, backgroundColor: '#fff', borderRadius: ts * 3, position: 'absolute', right: ts * 3, top: -6 }}>
                        <AntDesign name="close" size={ts * 5} color="tomato" style={{}} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignSelf: 'center',backgroundColor:'#edd5d5',borderRadius:ts*20,borderWidth:ts*4,borderColor:'#eee'}}>
                    <Image
                        source={{ uri: 'https://picsum.photos/200' }}
                        style={styles.sideMenuProfileIcon}
                    />
                    <Feather onPress={()=>{
                        props.navigation.navigate('Settings')
                    }}  name="edit" size={15} color="#333" style={{ position: 'absolute', bottom: 0, right: 5,padding:4,backgroundColor:'#fff',borderRadius:ts*3 }} />
                </View>

                <Text style={{ alignSelf: 'center', color: '#333', fontWeight: 'bold', fontSize: 18 }}>{'Mahesh Patra'}</Text>
                <Text style={{ color:status !=='verified'?'#3b86ff':'#e7008a',  fontSize: ts * 3, fontFamily: 'novaBold',alignSelf:'center',backgroundColor:'#eee',padding:5,borderRadius:10,letterSpacing:.5 }}>  <AntDesign name={status!=='verified'?"checkcircle":"warning"} size={ts * 3} color={status !=='verified'?'#3b86ff':'#e7008a'} /> Verified</Text>
            </View>
            {/*Top Large Image */}

            <DrawerContentScrollView {...props}  >



                <View style={{ padding: 2 }}>

                    <DrawerItemList {...props} />
                </View>
                <DrawerItem
                    label="SVMCM Scholarship"
                    icon={()=><Ionicons name="school-sharp" color={'#555'} size={23} />}
                    onPress={() => Linking.openURL('https://svmcm.co.in/')}
                />
                <DrawerItem
                    label="MAKOUT"
                    icon={()=><FontAwesome5 name="school" color={'#555'} size={22} />}
                    onPress={() => Linking.openURL('https://www.makautexam.net/')}
                />
                <DrawerItem
                    label="Makout Exam"
                    icon={()=><FontAwesome6 name="file-pen" color={'#555'} size={23} />}
                    onPress={() => Linking.openURL('https://makauttest3.ucanapply.com/onlineexam/public/')}
                />
                

                
                <View style={styles.customItem}>
                    <Text
                        onPress={() => {
                            Linking.openURL('https://mpatra.ml/');
                        }}>
                        Rate Us
                    </Text>
                    <Image
                        source={{ uri: BASE_PATH }}
                        style={styles.iconStyle}
                    />
                </View>
            </DrawerContentScrollView>
            <Text style={{position:'absolute',bottom:10,alignSelf:'center',color:'#fff',fontSize:12,padding:5,backgroundColor:'green',borderTopLeftRadius:15,borderBottomRightRadius:15}}>version: 0.0.1.01</Text>
            <TouchableOpacity onPress={()=>{
                // _removeData("USER_DATA").then((userdata) => {
                //     if(userdata==="removed"){
                //         props.navigation.replace('Login')
                //     }
                // })
            }} style={{position:'absolute',bottom:ts*16,flexDirection:'row',alignSelf:'center',alignItems:'center',borderRadius:12,backgroundColor:'#fdfdfd',paddingVertical:ts*2,paddingHorizontal:ts*4,elevation:3}}>
               
                <Text style={{color:Colors.primary,fontSize:18,fontWeight:'bold'}}>Log Out </Text>
                <MaterialCommunityIcons name='logout' size={ts * 5} color={Colors.primary}/>
            </TouchableOpacity>
               
           

        </View>
    );
};

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CustomSidebarMenu;
