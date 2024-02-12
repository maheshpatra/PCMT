// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
    container: {
        flex: 1,
      
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
        height: responsiveWidth(12.8),
        borderColor: Colors.primary,
        flexDirection: "row",
        alignItems: "center",
        
      },
      inputIcon: {
        marginRight: 20,
      },
      inputfild: {
        paddingLeft: 16,
        height: responsiveHeight(6.5),
        borderColor: "#ccc",
        width: "80%",
        color:'#555',
        fontFamily:'Nunito-Medium',
        fontSize:responsiveFontSize(1.8)
      },
      inputfildLabel: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: "bold",
      },
      button:{
        height: responsiveWidth(12),
        width: "100%",
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: responsiveWidth(6),
        borderRadius: 5,
      }
});

export default styles;
