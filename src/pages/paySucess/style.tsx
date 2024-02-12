// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        rowGap: 16,
        padding: 16,
      },
      social: {
        borderRadius: 20,
        size: 30,
        padding: 5,
        margin: 8,
        alignSelf: "center",
      },
      inputContainer: {
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth: 1.5,
        height: responsiveWidth(12.5),
        borderColor: Colors.primary,
        flexDirection: "row",
        alignItems: "center",
        
      },
      inputIcon: {
        marginRight: 20,
      },
      inputfild: {
        paddingLeft: 16,
        height: 50,
        color:'#555',
        width: "80%",
        fontFamily:'Nunito-Medium'

      },
      inputfildLabel: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: "bold",
      },
      submitbtn:{
        
          height: responsiveWidth(12),
          width: "100%",
          backgroundColor: Colors.white,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 10,
          borderRadius: 5,
          borderWidth:1.5,
          borderColor:Colors.primary,
          flexDirection:'row'
      }
});

export default styles;
