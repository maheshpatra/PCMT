// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
      },
      social: {
        height:'100%',width:'95%',alignSelf:'center',marginTop:10
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
      wraper:{
        width:'96%',  backgroundColor: '#fff', borderRadius: 8, marginRight: 30, margin: 5, flexDirection: 'row',elevation:5
      },
      wraper2:{
        marginTop: 5, marginLeft: 5,width:'100%'
      },
      txt1:{
        fontWeight: 'bold', color: Colors.secondary, fontSize: responsiveFontSize(2.4), marginHorizontal: 5, marginLeft: 10
      },
      txt2:{
        fontWeight: 'normal', color: Colors.grey, fontSize: responsiveFontSize(1.6), marginVertical: 5, marginLeft: 10, width: '80%',
      },
      txt3:{
        fontWeight: 'bold', color:'black',  fontSize: responsiveFontSize(1.8), marginHorizontal: 5, marginLeft: 10,padding:3
      },
      txt4:{
        fontWeight: 'bold', color:'black', fontSize: responsiveFontSize(1.8), marginHorizontal: 5, marginLeft: 10,padding:3
      },
      txt5:{
        fontFamily:"Nuito-medium", color:Colors.white,  fontSize: 12,  position:'absolute',top:5,right:20,backgroundColor:Colors.red,paddingHorizontal:5
      },
      txt6:{
        fontFamily:"Nuito-medium", color:Colors.white,  fontSize: 12,  position:'absolute',top:5,right:20,backgroundColor:Colors.red,paddingHorizontal:5,borderBottomLeftRadius:5,borderTopRightRadius:5
      }

});

export default styles;
