// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';

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
});

export default styles;
