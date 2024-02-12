// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ddd'
        
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
             fontFamily: 'Nunito-Medium',color:'#555'
        },
        text2:{
            fontFamily: 'Nunito-Medium',color:'#555'
       },
       text3:{
        fontFamily: 'Nunito-Medium', color: Colors.primary
   }

});

export default styles;
