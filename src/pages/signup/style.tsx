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
        borderWidth: responsiveWidth(.45),
        height: responsiveWidth(12),
        borderColor: Colors.primary,
        flexDirection: "row",
        alignItems: "center",
        marginVertical:responsiveWidth(1.5)
        
      },
      inputIcon: {
        marginRight: 20,
      },
      inputfild: {
        paddingLeft: 16,
        height: responsiveWidth(12),
        borderColor: "#ccc",
        width: "80%",
        color:'#555',
        fontSize:responsiveFontSize(1.8)
      },
      inputfildLabel: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: "bold",
      },
      signupbtn: {
        
          height: 45,
          width: "100%",
          backgroundColor: Colors.primary,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 30,
          borderRadius: 5,
        
      },
});

export default styles;
