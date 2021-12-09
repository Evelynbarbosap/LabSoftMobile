
import React, { useEffect } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import colors from '../styles/colors';
import Register from '../pages/Register';
import Athletic, { AthleticScreenProp } from '../pages/Athletic';
import RegisterSelectAthletic from '../pages/Register/RegisterSelectAthletic';
import { ModalityDetail, ModalityDetailProps } from '../pages/ModalitiesDetail';
import ModalitiesList, { ModalitiesListProps } from '../pages/ModalityList';
import Events from '../pages/Event';
import { useHeader } from '../contexts/header';
import { useFocusEffect } from '@react-navigation/core';

const ModalityStack = createStackNavigator<ModalityStackParamList>();

export type ModalityStackParamList = {
    Events:undefined
    ModalitiesList: ModalitiesListProps
    ModalityDetail: ModalityDetailProps
};

const stackOptions: StackNavigationOptions = {
    headerTitle: '',
    headerShown: false,
    headerTransparent: true,
    headerTintColor: colors.primary,
}

const ModalityRoutes = () => {


  return (
    <ModalityStack.Navigator initialRouteName="Events" screenOptions={stackOptions}>
      <ModalityStack.Screen name="Events" component={Events} options={{headerMode: 'screen'}} />
      <ModalityStack.Screen name="ModalitiesList" component={ModalitiesList} options={{headerMode: 'screen'}} />
      <ModalityStack.Screen name="ModalityDetail" component={ModalityDetail} options={{headerMode: 'screen'}} />
    </ModalityStack.Navigator>
  );
}

export default ModalityRoutes;

