import react from 'react'
import { Image,View } from 'react-native'
import styles from './style'

const Splash = () =>{
    return(
        <View style={{flex:1}}>
            <Image
        style={styles.tinyLogo}
        source={require('../../assets/images/plash-screen.png')}
      />
        </View>
    )
} 
export default Splash;