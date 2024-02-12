import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LiveClass from '../../pages/liveclass';
import MyCourse from '../../pages/mycourse';
import College from '../../pages/college';
import Question from '../../pages/question';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../assets/colors';
import Ca from '../../pages/ca';
const Tab = createBottomTabNavigator();

const MyTabs = () => {


  const CustomTabButton = ({ children, onPress }) => (

    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', top: -30 }} onPress={onPress}>

      <View style={{ width: 55, height: 55, borderRadius: 28, backgroundColor: '#fff', borderWidth: 5, borderColor: Colors.primary, elevation: 10, borderLeftWidth: 2, borderRightWidth: 2 }}>{children}</View>
    </TouchableOpacity>

  );



  return (
    <Tab.Navigator
      inactiveColor={"#999"}
      activeColor={Colors.primary}
      screenOptions=
      {{
        tabBarShowLabel: false,
        headerShown: false,
      }}

    >
      <Tab.Screen
        name="LiveClass" component={LiveClass}
        options={{

          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <AntDesign name="home" color={color} size={23} />
              <Text style={{ fontWeight: 'bold', fontSize: 11, marginTop: 4, color: color }}>Home</Text>
            </View>
          ),

        }} />
      <Tab.Screen
        name="MyCourse" component={MyCourse}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Feather name="book-open" color={color} size={23} />
              <Text style={{ fontWeight: 'bold', fontSize: 11, marginTop: 4, color: color }}>Notes</Text>
            </View>
          ),

        }} />
      <Tab.Screen
        name="Ca"
        component={Ca}
        options={{


          tabBarIcon: ({ color, focused }) => (

            <FontAwesome5 name="plus" color={color} size={23} style={{}} />


          ),
          tabBarButton: (props) => (
            <CustomTabButton {...props} />
          )
        }}

      />
      <Tab.Screen
        name="College" component={College}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="school-sharp" color={color} size={23} />
              <Text style={{ fontWeight: 'bold', fontSize: 11, marginTop: 4, color: color }}>Fees</Text>
            </View>
          ),

        }} />
      <Tab.Screen
        name="Question" component={Question}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <AntDesign name="questioncircleo" color={color} size={23} />
              <Text style={{ fontWeight: 'bold', fontSize: 11, marginTop: 4, color: color }}>Question</Text>
            </View>
          ),

        }} />
    </Tab.Navigator>
  );
}
export default MyTabs