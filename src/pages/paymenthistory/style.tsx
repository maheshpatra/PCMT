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
        width: '100%', height: responsiveWidth(21), backgroundColor: '#fff', borderRadius: 5, marginRight: responsiveWidth(10), marginBottom: 10, flexDirection: 'row' 
      },
        itemname:{
         color: Colors.secondary, fontSize: responsiveFontSize(1.8), marginHorizontal: 5, marginLeft: 10 ,fontFamily:'Nunito-Bold',fontWeight:'800'

      },
      itemdetails:{ fontWeight: 'normal', color: Colors.grey, fontSize: responsiveFontSize(1.5), marginVertical: 5, marginLeft: 10, width: '70%',fontFamily:'Nunito-Medium' }
      ,
      itemprice:{  color: 'green', fontSize: responsiveFontSize(1.6), marginHorizontal: 5, marginLeft: 10, padding: 3,fontFamily:'Nunito-Medium' },
      wraper3:{
        flexDirection: 'row',
        alignItems: 'center',  marginLeft: 10,justifyContent:'space-between',width:'68%'
        }
});

export default styles;
