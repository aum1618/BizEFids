/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Image} from 'react-native';
import Home from '../../screens/app/home';
import typography from '../../shared/theme/typography';
import colors from '../../shared/theme/colors';
import SIZES from '../../shared/theme/sizes';
import {iconPaths} from '../../shared/constants/paths';
import Profile from '../../screens/app/profile';
import Statistics from '../../screens/app/Statistics';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSelector} from 'react-redux';
import locales from '../../shared/locales';
import {screens} from '../../shared/constants/screens';
import Budget from '../../screens/app/budget';
import Buisnesses from '../../screens/app/Buisnesses';
import Services from '../../screens/app/services';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  const currentTheme = useSelector(state => state.appConfig.theme);
  const colour = colors[currentTheme];
  const currentLanguage = useSelector(state => state.appConfig.locale);
  const text = locales[currentLanguage];
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        swipeEnabled: false,
        tabBarActiveTintColor: colors.light.primary,
        tabBarInactiveTintColor: colors.light.placeholder,
        tabBarStyle: {
          height: SIZES.SCALE_60,
          backgroundColor: colour.background,
          elevation: 14,
        },
        tabBarIndicatorStyle: {
          top: 0,
          height: 0,
        },
        swipable: false,
        tabBarLabelStyle: {
          fontFamily: typography.medium,
          fontSize: typography.FONT_SIZE_10,
        },
      }}>
      <Tab.Screen
        name={screens.home}
        component={Home}
        options={{
          tabBarLabel: text.home,
          tabBarIcon: ({focused, color}) => {
            return <TabIcon color={color} path={iconPaths.home} />;
          },
        }}
      />
      <Tab.Screen
        name={screens.services}
        component={Services}
        options={{
          tabBarLabel: screens.services,
          tabBarIcon: ({focused, color}) => {
            return <TabIcon color={color} path={iconPaths.services} />;
          },
        }}
      />
      <Tab.Screen
        name={screens.accounts}
        component={Statistics}
        options={{
          tabBarLabel: text.statistics,

          tabBarIcon: ({focused, color}) => {
            return <TabIcon color={color} path={iconPaths.search} />;
          },
        }}
      />
      <Tab.Screen
        name={screens.businesses}
        component={Buisnesses}
        options={{
          tabBarLabel: 'Buisness',

          tabBarIcon: ({focused, color}) => {
            return <TabIcon color={color} path={iconPaths.buisness} />;
          },
        }}
      />
      <Tab.Screen
        name={screens.profile}
        component={Profile}
        options={{
          tabBarLabel: text.profile,
          tabBarIcon: ({focused, color}) => {
            return <TabIcon color={color} path={iconPaths.user} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const TabIcon = ({color, path}) => (
  <Image
    tintColor={color}
    source={path}
    style={{height: typography.FONT_SIZE_24, width: typography.FONT_SIZE_24}}
  />
);
