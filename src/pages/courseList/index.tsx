import React, { useState } from 'react'
import { Text, View, Alert, TextInput, FlatList, Image, ScrollView, StyleSheet, Modal, TouchableOpacity } from 'react-native'
  
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Colors from '../../assets/colors';
import { ImageSlider } from "react-native-image-slider-banner";

import styles from './style';

const CourseList = ({ navigation }) => {

    const [show, setShow] = useState(false)
    
  const [filter, setFilter] = useState(false)

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
                            indicatorContainerStyle={{ position: 'absolute', bottom: 0 }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 5, borderWidth: 1.5, width: '84%', marginTop: 10, paddingLeft: 10, borderColor: Colors.primary, height: 45, backgroundColor: '#fff' }}>
                            <AntDesign name='search1' size={24} color={Colors.primary} />
                            <TextInput cursorColor={Colors.primary} placeholder='Search Your Course'
                                placeholderTextColor={'#999'}
                            />
                        </View>
                        <TouchableOpacity onPress={() => {
                            setFilter(true)

                        }} style={styles.filter}>
                            <Fontisto style={{ transform: [{ rotate: '90deg' }] }} name='equalizer' size={24} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.txt2}>Choose your course</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) =>
                                <View style={styles.wraper3}>
                                    <Image
                                        source={{uri: item.image}}
                                        style={styles.image}
                                    />
                                    <View style={{ marginTop: 5, marginLeft: 5 }}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.mba}>MBA</Text>
                                        <Text style={styles.details}>{item.details}</Text>
                                        <View style={{ flexDirection: 'row', width: '70%' }}>
                                            <Text onPress={() => navigation.navigate('CourseDetails')} style={styles.viewdetails}>View Detsils</Text>
                                            <Text onPress={() => navigation.navigate('Payment')} style={styles.buynow}>Buy Now</Text>
                                        </View>
                                    </View>
                                </View>
                            }/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default CourseList

