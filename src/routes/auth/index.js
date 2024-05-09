import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Accounts from '../../screens/auth/accounts';
import {screens} from '../../shared/constants/screens';
import Login from '../../screens/auth/login';
import SignUp from '../../screens/auth/SignUp';
import ForgotPassword from '../../screens/auth/forgotPassword';
import OTPScreen from '../../screens/auth/OTPScreen';
import ResetPassword from '../../screens/auth/resetPassword';
import ProfileSetup from '../../screens/auth/profileSetup';
import LocationScreen from '../../screens/auth/location';
import SuccessScreen from '../../screens/success';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screens.accounts} component={Accounts} />
      <Stack.Screen name={screens.login} component={Login} />
      <Stack.Screen name={screens.signUp} component={SignUp} />
      <Stack.Screen name={screens.forgotPassword} component={ForgotPassword} />
      <Stack.Screen name={screens.OTPScreen} component={OTPScreen} />
      <Stack.Screen name={screens.resetPassword} component={ResetPassword} />
      <Stack.Screen name={screens.profileSetup} component={ProfileSetup} />
      <Stack.Screen name={screens.location} component={LocationScreen} />
      <Stack.Screen name={screens.success} component={SuccessScreen} />
    </Stack.Navigator>
  );
}
