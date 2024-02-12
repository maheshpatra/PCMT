// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import { responsiveFontSize, responsiveScreenFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f2f2f2'
        
      },refercode:
        {
        fontFamily:'Nunito-Medium',fontWeight:'800',color:Colors.primary
        },
        refertext:{
            fontFamily:'Nunito-Medium',fontWeight:'800',color:'#555'
        },
        namecontainer:{
            width: '50%',borderWidth:.5,padding:5
        },
        datecontainer:{
            width: '24%',borderWidth:.5,padding:5 
        },
        statuscontainer:{
            width: '24%',borderWidth:.5,padding:5  
        },
        text:{
            fontFamily: 'Nunito-Medium', fontWeight: '800',color: Colors.secondary,borderColor:Colors.grey
        },
        namecontainer1:{
            width: '50%',borderWidth:.5,padding:5,borderColor:Colors.grey
        },
        datecontainer1:{
            width: '24%',borderWidth:.5,padding:5,borderColor:Colors.grey
        },
        statuscontainer1:{
            width: '24%',borderWidth:.5,padding:5,borderColor:Colors.grey  
        },
        text1:{
            fontFamily:'Nunito-Medium',
            fontWeight: 'bold', color: Colors.secondary, fontSize: responsiveFontSize(1.8), marginHorizontal: 5, marginLeft: 10 
        },
        text2:{
            fontFamily:'Nunito-Medium', color: Colors.primary, fontSize: responsiveFontSize(1.5), marginHorizontal: 5, marginLeft: 10,
       },
       text3:{
        fontWeight: 'normal', color: Colors.grey, fontSize: responsiveScreenFontSize(1.5), marginTop: 5, marginLeft: 10, width: '70%',fontFamily:'Nunito-Medium'
   }

});

export default styles;
