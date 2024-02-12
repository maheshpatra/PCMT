// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import {responsiveScreenWidth, responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      }, text1: {
        alignSelf: 'center', fontFamily: 'Nunito-Medium', fontWeight: '800', fontSize: responsiveFontSize(2.5), marginTop: 12, color: '#555'
      },textDesc: {
        marginHorizontal: 10, fontFamily: 'Nunito-Medium', fontWeight: '600', fontSize: responsiveFontSize(1.8), marginTop: 10, marginBottom: 20, color: '#999'
      },
      text2: {
        alignSelf: 'center', fontFamily: 'Nunito-Medium', fontWeight: '800', fontSize: 14, marginTop: 5, color: Colors.primary
      },
      wraper:{
        flexDirection: 'row', justifyContent: 'space-between', marginTop: responsiveWidth(5), marginHorizontal: 10 
      },
      itemwraper:{
        width: '100%', height: responsiveWidth(23), backgroundColor: '#fff', borderRadius: 5, marginRight: responsiveWidth(10), marginBottom: 10, flexDirection: 'row' 
      },
      itemname:{
         color: Colors.secondary, fontSize: responsiveFontSize(1.7), marginHorizontal: 5, marginLeft: 10 ,fontFamily:'Nunito-Bold',fontWeight:'800'

      },
      itemdetails:{ fontWeight: 'normal', color: Colors.grey, fontSize: responsiveFontSize(1.5), marginVertical: 5, marginLeft: 10, width: '70%',fontFamily:'Nunito-Medium' }
      ,
      itemutn:{ fontWeight: '800', color: Colors.primary, fontSize: responsiveFontSize(1.5), marginHorizontal: 5, marginLeft: 10, padding: 3,fontFamily:'Nunito-Medium' },
      imagestyle: {
        height: responsiveScreenWidth(35), width: '95%', borderRadius: 7, alignSelf: 'center', marginTop: 10
      },
      btn:{
        height:responsiveScreenWidth(10),
        width: "90%",
        backgroundColor: Colors.secondary,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 15,
        marginHorizontal:10,
        borderRadius: 5,
        flexDirection:'row'
        
      }
});

export default styles;
