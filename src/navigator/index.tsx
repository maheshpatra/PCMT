import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../pages/splash';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Forgot from '../pages/forgot';
import MyProfile from '../pages/myprofile';
import MyReferral from '../pages/myreferral';
import PaymentHistory from '../pages/paymenthistory';
import MyDrawer from './Drawer';
import AppliedCollege from '../pages/appliedcollege';
import UpdatePass from '../pages/updatePass';
import Course from '../pages/course';
import MyCourseDetails from '../pages/myCourseDetails';
import MyCoursesSubject from '../pages/myCoursesSubject';
import CollegeDetails from '../pages/collegeDetails';
import Verification from '../pages/verification';
import Payment from '../pages/payment';
import CourseListDetails from '../pages/courseList';
import CourseList from '../pages/courseList';
import CourseDetails from '../pages/courseDetails';
import Paysucess from '../pages/paySucess';
import Intro from '../pages/intro';

const Stack = createNativeStackNavigator();
export default function Main() {
  
  return (
   
      <Stack.Navigator 
      initialRouteName='Intro'
      screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Forgot' component={Forgot} />
        <Stack.Screen name='Referral' component={MyReferral} />
        <Stack.Screen name='PaymentHistory' component={PaymentHistory} />
        <Stack.Screen name='Drawer' component={MyDrawer} />
        <Stack.Screen name='AppliedCollege' component={AppliedCollege} />
        <Stack.Screen name='UpdatePass' component={UpdatePass} />
        <Stack.Screen name='Course' component={Course} />
        <Stack.Screen name='MyCourseDetails' component={MyCourseDetails} 
        options={{
          headerShown: true,
          headerTitle: 'Notes Details'

         }}/>
        <Stack.Screen name='MyCoursesSubject' component={MyCoursesSubject} 
         options={{
          headerShown: true,
          headerTitle: 'Notes'

         }}
        
        />
        <Stack.Screen name='CollegeDetails' component={CollegeDetails} />
        <Stack.Screen name='Verification' component={Verification} />
        <Stack.Screen name='Payment' component={Payment} />
        <Stack.Screen name='CourseList' component={CourseList} />
        <Stack.Screen name='CourseDetails' component={CourseDetails} />
        <Stack.Screen name='Paysucess' component={Paysucess} />
        
        
              
      </Stack.Navigator>
   
  );
}