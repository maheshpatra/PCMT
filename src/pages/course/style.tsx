// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    container: {
      flex: 1, backgroundColor: '#F2F2F2'
      },
      social: {},
      text1: {fontSize: responsiveFontSize(2.3), color: '#555'},
      text2: {fontSize: responsiveFontSize(2.6), fontWeight: 'bold', fontFamily: '', color: '#555'},
      text3: {
        fontSize: responsiveFontSize(2.4), fontWeight: 'bold', marginTop: 10, color: '#555' 
      },
      text4: {fontWeight: 'bold', color: Colors.secondary, fontSize: 12, marginHorizontal: 5, marginLeft: 10},
      wraper1:{
        marginHorizontal: 15, marginTop: 10
      },
      wraper2:{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
      },
      wraper3:{flexDirection: 'row', alignItems: 'center', borderRadius: 5, borderWidth: 1.5, width: '84%', marginTop: 10, paddingLeft: 10, borderColor: Colors.primary, height: 45, backgroundColor: '#fff'},
      wraper4:{
        justifyContent: 'center', borderRadius: 5, borderWidth: 1.5, width: 45, marginTop: 10, borderColor: Colors.primary, alignItems: 'center', height: 45, backgroundColor: '#fff'
      },
      wraper5:
        { width: '45%', height: 130, backgroundColor: '#fff', borderRadius: 5, marginRight: 30, marginBottom: 30 },
     itemimage:{
      height: 100, width: '90%', alignSelf: 'center', borderRadius: 7, marginTop: 6 
     }
      
      
});

export default styles;
