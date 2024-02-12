// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },
      wraper:{
        backgroundColor: '#fff',
        borderRadius: 5, 
        marginTop: 15, 
        paddingHorizontal: 20, 
        paddingBottom: 10,
        marginHorizontal:15
      },
      name:{
        fontFamily: 'Nunito-Medium', fontWeight: '800', fontSize: 16, marginTop: 12, color: 'black',alignSelf:'center'
      },
      textview:{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',borderBottomWidth:1.5,paddingVertical:10,borderColor:Colors.grey
      },
      text:{
        alignSelf: 'center', fontFamily: 'Nunito-Medium', fontWeight: '800', fontSize: 12, marginTop: 5, color: Colors.grey,
      },
      updatebtn:{
        height: 45,
        width: "93%",
        backgroundColor: Colors.secondary,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 15,
        borderRadius: 5,
      }
      
});

export default styles;
