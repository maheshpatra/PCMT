// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#f2f2f2'
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
  wraper: {
    height: '100%', width: '95%', alignSelf: 'center', marginTop: 10,
  },
  image: {
    height: 120, width: 120, borderRadius: 60, alignSelf: 'center', marginTop: 10,
  },
  txt1: {
    fontFamily: 'Nunito-Medium', fontWeight: '800', fontSize: 16, marginTop: 12, marginHorizontal: 10, color: 'black'
  },
  txt2: {
    flexDirection: 'row', alignItems: 'center', marginHorizontal: 10,
  },
  txt3: {
    marginLeft: 5, alignSelf: 'center', fontFamily: 'Nunito-Medium', fontWeight: '800', fontSize: 13, marginTop: 5, color: Colors.grey, marginRight: 10
  },
  txt4: {
    fontFamily: 'Nunito-Medium', fontWeight: '800', fontSize: 14, marginTop: 5, color: Colors.primary, marginLeft: 10
  },
  txt5: {
    marginHorizontal: 10, fontFamily: 'Nunito-Medium', fontWeight: '600', fontSize: 14, marginTop: 10, marginBottom: 20,color:'#555'
  },
  wraper1: {
    backgroundColor: '#fff', borderRadius: 5, marginTop: 15, paddingHorizontal: 20, paddingBottom: 10
  },
  txt6: {
    fontFamily: 'Nunito-Medium', fontWeight: '800', fontSize: 16, marginTop: 12, color: 'black',
  },
  wraper2: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  txt7: {
    alignSelf: 'center', fontFamily: 'Nunito-Medium', fontWeight: '800', fontSize: 13, marginTop: 5, color: Colors.grey,
  },
  txt8: {
    alignSelf: 'center', fontFamily: 'Nunito-Medium', fontWeight: '800', fontSize: 13, marginTop: 5, color: Colors.grey, marginRight: 10
  },
  wraper3: {
    padding: 10, backgroundColor: '#fff', borderRadius: 6, marginTop: 15
  },
  wraper4: {
    flexDirection: 'row', alignItems: 'center'
  },
  txt9: {
    fontFamily: 'Nunito-Medium', fontWeight: '800', color: 'black'
  }


});

export default styles;
