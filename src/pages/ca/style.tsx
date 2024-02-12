import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },
      textwraper:{backgroundColor: '#fff', borderRadius: 5,width:'95%',alignSelf:'center',padding:10,marginTop:20,paddingTop:20,paddingBottom:20}
      ,desc:{
        fontFamily:'Nunito-Medium',color:'#555',textAlign:'center',
        fontSize:responsiveFontSize(4),
      },
      updatebtn:{
        height: responsiveWidth(12),
        width: "93%",
        backgroundColor: Colors.secondary,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 15,
        borderRadius: 5,
      }
});

export default styles;
