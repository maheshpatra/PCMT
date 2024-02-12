// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
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
      buynow:{
        fontWeight: 'bold', color: 'red', fontSize: 12, marginHorizontal: 5, marginLeft: 10, padding: 3
      },
      viewdetails:{ fontWeight: 'bold', color: Colors.primary, fontSize: 12, marginHorizontal: 5, marginLeft: 10, padding: 3 },
      details:{ fontWeight: 'normal', color: Colors.grey, fontSize: 12, marginVertical: 2, marginLeft: 10, width: '70%', },
      mba:{ fontWeight: 'normal', color: Colors.grey, fontSize: 12, marginHorizontal: 5, marginLeft: 10 },
      name:{ fontWeight: 'bold', color: Colors.secondary, fontSize: 14, marginHorizontal: 5, marginLeft: 10 },
      wraper3:{width: '100%', height: 110, backgroundColor: '#fff', borderRadius: 5, marginRight: 30, marginBottom: 20, flexDirection: 'row' },
      image:{height: responsiveWidth(18), width: responsiveWidth(18), borderRadius: 7, marginTop: 10, marginLeft: 10,borderWidth:1},
      txt2:{fontSize: responsiveFontSize(2.4), fontWeight: 'bold', marginTop: 10, color: '#555'}
     ,filter:{ justifyContent: 'center', borderRadius: 5, borderWidth: 1.5, width: 45, marginTop: 10, borderColor: Colors.primary, alignItems: 'center', height: 45, backgroundColor: '#fff' },
     
      
});

export default styles;
