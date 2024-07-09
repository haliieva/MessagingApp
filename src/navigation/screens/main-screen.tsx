import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {FC} from 'react';
import LoginScreen from './login-screen';
import HomeScreen from './home-screen';
import ChatScreen from './chat-screen';
import SignUpScreen from './sign-up-screen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

const MainTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
};

const MainNavigation: FC = () => {
  const user = '1';

  return user ? <MainTabNavigation /> : <AuthStackNavigation />;
};

export default MainNavigation;
