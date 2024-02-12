// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import { responsiveFontSize, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';

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
        height: responsiveScreenWidth(12),
        borderColor: Colors.primary,
        flexDirection: "row",
        alignItems: "center",
        
      },
      inputIcon: {
        marginRight: 20,
      },
      inputfild: {
        paddingLeft: 16,
        height: responsiveScreenWidth(12),
        borderColor: "#ccc",
        width: "80%",
        fontFamily:'Nunito-Medium',
        color:'#555ads'
      },
      inputfildLabel: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: "bold",
      },
      updatebtn:{
        height: responsiveWidth(12),
        width: "100%",
        backgroundColor: Colors.secondary,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 25,
        borderRadius: 5,
      },updatetext:{ fontWeight: "normal", fontSize: responsiveFontSize(2), color: "#fff" }
});

export default styles;
