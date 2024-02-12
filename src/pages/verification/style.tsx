// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

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
        height: 50,
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
        borderColor: "#ccc",
        width: "80%",
      },
      inputfildLabel: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: "bold",
      },
      text1: {
        fontFamily:'Nunito-Medium',alignSelf:'center',fontSize:responsiveFontSize(1.7),fontWeight:'800',color:'#999'
      },
      text2: {
        fontFamily:'Nunito-Medium',alignSelf:'center',fontSize:responsiveFontSize(1.8),color:'#999',fontWeight:'800',marginVertical:20
      },
      updatebtn:{
        height: 45,
              width: "100%",
              backgroundColor: Colors.secondary,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 30,
              borderRadius: 5,
      },
      updatetext:{
        fontWeight: "normal", fontSize: 14, color: "#fff",fontFamily:'Nunito-Medium'
      }
});

export default styles;
