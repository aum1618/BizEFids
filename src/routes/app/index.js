import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../../shared/constants/screens';
import Home from '../../screens/app/home';
import TabNavigator from '../tab';
import Transactions from '../../screens/app/transactions';
import Notification from '../../screens/app/notification';
import Ads from '../../screens/app/Ads';
import Buisnesses from '../../screens/app/Buisnesses';
import ServiceDetails from '../../screens/app/ServiceDetails';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'tab'} component={TabNavigator} />
      <Stack.Screen name={screens.home} component={Home} />
      <Stack.Screen name={screens.notification} component={Notification} />
      <Stack.Screen name={screens.transactions} component={Transactions} />
      <Stack.Screen name={screens.ads} component={Ads} />
      <Stack.Screen name={screens.businesses} component={Buisnesses} />
      <Stack.Screen name={screens.serviceDetails} component={ServiceDetails} />
    </Stack.Navigator>
  );
}
