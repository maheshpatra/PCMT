// LoginFormStyles.js

import { StyleSheet,Dimensions } from 'react-native';
import Colors from '../../assets/colors';
import { responsiveHeight, responsiveWidth, responsiveFontSize, responsiveScreenWidth} from "react-native-responsive-dimensions";

const ts = Dimensions.get('window').width / 100
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },
      wraper:{
        flexDirection: 'row',alignItems:'center',marginTop:10,marginLeft:10
      },
      itemwraper:{
        width: '100%', height: responsiveWidth(23), backgroundColor: '#fff', borderRadius: 5, marginRight: responsiveWidth(10), marginBottom: 10, flexDirection: 'row' 
      },
      itemname:{
        fontWeight: 'bold', color: Colors.secondary, fontSize: responsiveFontSize(2), marginHorizontal: 5, marginLeft: 10,fontFamily:'Nunito-Medium'

      },
      itemdetails:{ fontWeight: 'normal', color: Colors.grey, fontSize: 12, marginVertical: 5, marginLeft: 10, width: '70%',}
      ,
      itemutn:{ fontWeight: '800', color: Colors.primary, fontSize: responsiveFontSize(1.5), marginHorizontal: 5, marginLeft: 10, padding: 3,fontFamily:'Nunito-Medium' },
      applybtn:{flexDirection: 'row', width: '70%',marginTop:10},
      applytext:{fontWeight: '800', color: Colors.primary, fontSize: responsiveFontSize(1.8), marginHorizontal: 5, marginLeft: 10, padding: 3,fontFamily:'Nunito-Bold'},
      image:{height: responsiveScreenWidth(24), width: responsiveScreenWidth(24), borderRadius: 7, marginVertical: 8, marginLeft: 10},
      mainwraper:{
        width: '97%', height: 110, backgroundColor: '#fff', borderRadius: 10, marginRight: 30, margin: 5, flexDirection: 'row',elevation:5, 
      },
      searchwraper:{flexDirection: 'row', alignItems: 'center', borderRadius: 5, borderWidth: 1.5, width: '84%', marginTop: 10, paddingLeft: 10, borderColor: Colors.primary, height: 45 },
      mwraper:{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
      fwraper:{ justifyContent: 'center', borderRadius: 5, borderWidth: 1.5, width: 45, marginTop: 10, borderColor: Colors.primary, alignItems: 'center', height: 45 },
      tab: {
        borderBottomWidth: 1, width: '30%', height: ts * 12, justifyContent: 'center', alignItems: 'center'
      },
      tabText: {
        color: '#555',
        fontWeight: 'bold',
        fontSize: 16
      },
      tabt: {
        borderWidth: 1, width: ts * 28, height: ts * 12, justifyContent: 'center', alignItems: 'center',marginHorizontal:responsiveScreenWidth(8),borderRadius:10
      },
});

export default styles;
