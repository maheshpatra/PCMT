import { createDrawerNavigator } from '@react-navigation/drawer';
// import Share from '../pages/share';
import Share from '../../pages/share';
import Aboutus from '../../pages/about';
import MyTabs from '../BottomTab';
import CustomSidebarMenu from '../../components/CustomDrawer';
import {View,TouchableOpacity,Dimensions} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DrawerActions } from '@react-navigation/native';
import MyProfile from '../../pages/myprofile';

const Drawer = createDrawerNavigator();

const ts = Dimensions.get('window').width / 100;
const MyDrawer =({navigation})=> {
  return (
    <Drawer.Navigator
    
    drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen name="Home" component={MyTabs}  
       options={{
        headerShown: false,drawerIcon: ({ color }) => (
          <AntDesign name="home" color={color} size={24} />
      ),
       }}/>
       <Drawer.Screen name="Profile" component={MyProfile}  
       options={{
        headerShown: false,drawerIcon: ({ color }) => (
          <AntDesign name="user" color={color} size={24} />
      ),
       }}
       solution1
      />

      <Drawer.Screen name="Share" component={Share} 
      options={{
        headerShown: false, drawerIcon: ({ color }) => (
            <Feather name="share-2" color={color} size={24} />
        ), headerTitle: ''
        
    }}
      />
       <Drawer.Screen name="About" component={Aboutus}  
       options={{
        headerShown: false,drawerIcon: ({ color }) => (
          <AntDesign name="solution1" color={color} size={24} />
      ),
       }}/>
      
    </Drawer.Navigator>
  );
}

export default MyDrawer