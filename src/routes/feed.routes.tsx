import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import colors from '../styles/colors';
import Feed from '../pages/Feed';
import AthleticProfile from '../pages/AthleticProfile';
import { HeaderBackButton } from '@react-navigation/elements'
import { useHeader } from '../contexts/header';

const FeedStack = createStackNavigator<FeedStackParamList>();

export type FeedStackParamList = {
    Feed: undefined;
    AthleticProfile: undefined;
};

const FeedRoutes = () => {

    const { setShowHeader } = useHeader();

    const buttonBackOptions = (navigation: any): StackNavigationOptions =>  {
        return ({
            headerLeft: (props) => (
                <HeaderBackButton
                    {...props}
                    onPress={() => {
                    setShowHeader(true);
                    navigation.goBack()
                    }}
                />
            ),
            ...athleticOptions
        }) 
    }

    return (
        <FeedStack.Navigator initialRouteName="Feed" screenOptions={stackOptions}>
            <FeedStack.Screen name="Feed" component={Feed} options={{headerShown: false}}/>
            <FeedStack.Screen name="AthleticProfile" component={AthleticProfile} options={({navigation}) => buttonBackOptions(navigation)}/>
        </FeedStack.Navigator>
    );
}

const stackOptions: StackNavigationOptions = {
    headerShown: true,
}

const athleticOptions: StackNavigationOptions = {
    headerTitle: '',
    headerShown: true,
    headerTransparent: true,
    headerTintColor: colors.primary,
}


export default FeedRoutes;