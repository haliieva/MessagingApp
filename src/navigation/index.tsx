import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './screens/main-screen';

const Navigation: FC = () => {
  // const onReady = () => setTimeout(() => RNBootSplash.hide(), 2000);
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
