import { View, Text,Image } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import Colors from '../../assets/colors'

const PaymentSucess = ({type}) => {
  return (
    <View>
      {type=='payment'?<View>
      <Image
          style={{ height: responsiveScreenWidth(40), width: responsiveScreenWidth(40), alignSelf: 'center', marginTop: 20 }}
          source={require('../../assets/images/tick.png')}
        />
        <Text style={{fontWeight:'900',fontFamily:'Nunito-Medium',fontSize:responsiveFontSize(3),alignSelf:'center',color:'#555'}}>Payment Sucessfull</Text>
        <Text style={{fontFamily:'Nunito-Medium',fontSize:responsiveFontSize(1.6),alignSelf:'center',color:'#555'}}>Transaction Number : 123244567</Text>
        <Text style={{fontFamily:'Nunito-Medium',fontSize:responsiveFontSize(1.6),alignSelf:'center',color:'#555'}}>Amount paid <Text style={{color:Colors.red}}>$20</Text></Text>
        <Text style={{fontFamily:'Nunito-Medium',fontSize:responsiveFontSize(1.6),alignSelf:'center',color:'#555'}}>Payed by <Text style={{color:Colors.red}}>Razorpay</Text></Text>
        

      </View>:
      <View>
      <Image
          style={{ height: responsiveScreenWidth(30), width: responsiveScreenWidth(80), alignSelf: 'center', marginTop: 20 }}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={{fontWeight:'900',fontFamily:'Nunito-Medium',fontSize:responsiveFontSize(2.5),alignSelf:'center',color:'green',marginVertical:20}}>Thank You For Applyed</Text>
        <Text style={{textAlign:'center',fontWeight:'900',fontFamily:'Nunito-Medium',fontSize:responsiveFontSize(2),alignSelf:'center',color:'#555',width:'80%',marginVertical:20}}>Please Pay the Minimum Seat Booking Amount to confirm your seat</Text>
        <Text style={{fontWeight:'800',fontFamily:'Nunito-Medium',fontSize:responsiveFontSize(2),alignSelf:'center',color:Colors.red}}>Booking Fees <Text style={{color:'#555'}}>15000</Text></Text>
        
      </View>
      
      
      }
    </View>
  )
}

export default PaymentSucess