import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import { responsiveFontSize, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
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
    alignSelf: 'center', fontFamily: 'Nunito-Medium', fontWeight: '800', fontSize: responsiveFontSize(3), marginTop: 12, color: '#555'
  },
  text2: {
    alignSelf: 'center', fontFamily: 'Nunito-Medium', fontWeight: '800', fontSize: 14, marginTop: 5, color: Colors.primary
  },
  textDesc: {
    marginHorizontal: 10, fontFamily: 'Nunito-Medium', fontWeight: '600', fontSize: responsiveFontSize(1.8), marginTop: 10, marginBottom: 20, color: '#999'
  },
  imagestyle: {
    height: responsiveScreenWidth(35), width: '95%', borderRadius: 7, alignSelf: 'center', marginTop: 10
  },
  itemwraper: {
    backgroundColor: '#fff', borderRadius: 5, marginTop: 10
  },
  listHeader: {
    fontFamily: 'Nunito-Medium', fontWeight: '800', fontSize: responsiveFontSize(2.1), marginTop: 12, marginLeft: 10, color: '#555'
  },
  itembtn: {
    height: responsiveScreenWidth(10), width: '95%', alignSelf: 'center', borderWidth: 1, marginBottom: 5, justifyContent: 'space-between', borderColor: '#ccc', borderRadius: 4, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8
  },
  itemtext: {
    fontFamily: "Nunito-Medium", color: Colors.primary, fontSize: responsiveFontSize(1.8), fontWeight: '600'
  }
});

export default styles;
