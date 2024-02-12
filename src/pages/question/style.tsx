// LoginFormStyles.js

import { StyleSheet,Dimensions } from 'react-native';
import Colors from '../../assets/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

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
        
        borderColor: Colors.primary,
        alignItems: "center",
        marginTop:10
        
      },
      inputIcon: {
        marginRight: 20,
      },
      inputfild: {
        paddingLeft: 16,
        height: 50,
        borderColor: "#ccc",
        width: "100%",
      },
      inputfildLabel: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: "bold",
      },
      submitbtn:{
        height: 45,
        width: "100%",
        backgroundColor: Colors.secondary,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 15,
        borderRadius: 5,
      },
      txt1:{ fontSize: responsiveFontSize(1.6),fontFamily:'Nunito-Medium',color:'#555' },
      txt2:{ color: Colors.primary, marginTop: 10, fontSize: 12,fontFamily:'Nunito-Medium' },
      wraper1: {width: '100%', backgroundColor: '#ddd', height: 80, marginBottom: 10, borderRadius: 5, paddingHorizontal: 10 },
      txt3:{ color: Colors.secondary, fontSize: 17, fontWeight: '800', marginBottom: 10,fontFamily:'Nunito-Medium' },
      txt4:{color: Colors.primary, marginTop: 10,fontFamily:'Nunito-Medium'},
      wraper2:{ width: '100%', marginTop: 20, backgroundColor: Colors.white, borderRadius: 5, paddingHorizontal: 10 },
      title:{fontSize: responsiveFontSize(2.5), fontWeight: 'bold', marginTop: 5,fontFamily:'Nunito-Medium',color:'#555' }
});

export default styles;
