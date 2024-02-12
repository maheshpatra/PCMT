// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import { responsiveHeight, responsiveWidth, responsiveFontSize,responsiveScreenWidth} from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
      },
      titleStyle: {
        padding: 10,
        textAlign: 'left',
        fontSize: 30,
        color:Colors.primary
        ,fontFamily:'Oswald-Bold.ttf',
        fontWeight:'bold',
        paddingHorizontal:20
      },
      paragraphStyle: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
        
      },
      introImageStyle: {
        width: responsiveScreenWidth(100),
        height: responsiveScreenWidth(100),
      },
      introTextStyle: {
        fontSize: 25,
        color: Colors.grey,
        
        paddingHorizontal: 20,
       
        

      },
      introTitleStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
      },
      buttonCircle: {
        width: responsiveScreenWidth(25),
        height: responsiveScreenWidth(12),
        backgroundColor: Colors.primary,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default styles;
