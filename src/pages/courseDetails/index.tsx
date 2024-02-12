import React, { useState } from 'react'
import { Text, View, Alert, TextInput, FlatList, Image, ScrollView, StyleSheet, Modal,TouchableOpacity } from 'react-native'
  
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../assets/colors';
import { ImageSlider } from "react-native-image-slider-banner";

import styles from './style';
import { responsiveFontSize, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';

const CourseDetails = ({ navigation }) => {

    const [show, setShow] = useState(false)

    const menuClick = () => {
        setShow(!show)

    }

    const data = [
        {
            name: 'MBA',
            image: 'https://picsum.photos/300/200',
            details: 'some description here for the course we offered soi ssde werz'
        },
        {
            name: 'Computer Science',
            image: 'https://picsum.photos/400/250',
            details: 'some description here for the course we offered soi ssde werz'
        },
        {
            name: 'Merketing',
            image: 'https://picsum.photos/320/210',
            details: 'some description here for the course  we offered soi ssde werz'
        },
        {
            name: 'Data Science',
            image: 'https://picsum.photos/350/220',
            details: 'some description here for the course we offered soi ssde werz'
        }
    ]
    return (
        <View style={{ flex: 1 }}>
             
            <ScrollView style={{ backgroundColor: '#f3f3f3' }}>
                <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                    <View style={{ height: 200 }}>
                        <ImageSlider
                            data={[
                                { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
                                { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
                                { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
                            ]}
                            timer={2000}
                            autoPlay={true}
                            preview={false}
                            caroselImageStyle={{ resizeMode: 'cover' }}
                            onClick={(item, index) => { alert('hello' + index) }}
                            onItemChanged={(item) => console.log("item", item)}
                            closeIconColor="#fff"
                            indicatorContainerStyle={{ position: 'absolute', bottom: 0 }}/>
                        </View>
                    <View style={{ backgroundColor: '#fff', borderRadius: 5, marginTop: 15 }}>
                        <Text style={styles.text1}>Sdoi Mumbai</Text>
                        <Text style={styles.text2}>MBA</Text>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => {
                                navigation.navigate('Payment')
                            }}
                        ><Ionicons name='bag-handle-outline' size={responsiveFontSize(2.5)} color={'#fff'} style={{marginRight:10}}/>
                            <Text style={{ fontWeight: "normal", fontSize: responsiveFontSize(2), color: "#fff" }}>
                                Buy Now
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.textDesc}>Niuno quale manifesta della e dea. Della niuna porgere 'l nel sí impetrata. In di procuratori da nel noi quali suo lui della. Sí bene e il quale, siamo in per che sogiacere vostro carissime e gli siamo. Speranza al fa da mortali nostri in. Con come manifestamente ora sé,.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default CourseDetails

