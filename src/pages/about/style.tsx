import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },
      textwraper:{backgroundColor: '#fff', borderRadius: 5,width:'95%',alignSelf:'center',padding:10,marginTop:20,paddingTop:20,paddingBottom:20}
      ,desc:{
        fontFamily:'Nunito-Medium',lineHeight:21,color:'#555'
      }
});

export default styles;
