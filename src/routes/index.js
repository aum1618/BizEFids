import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app';
import AuthNavigator from './auth';
import {useSelector} from 'react-redux';
import Onboarding from '../screens/onboarding';

export default function Navigator() {
  const isAuthenticated = useSelector(state => state.appConfig.authenticated);
  console.log('🚀 ~ Navigator ~ isAuthenticated:', isAuthenticated);
  const shouldShowOnboarding = useSelector(
    state => state.appConfig.showOnboarding,
  );

  return (
    <>
      {!shouldShowOnboarding ? (
        <NavigationContainer>
          {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <Onboarding />
      )}
    </>
  );
}
