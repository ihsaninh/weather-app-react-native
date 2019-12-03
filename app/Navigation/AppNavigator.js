import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../Containers/HomePage/HomePage.container';

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Weather App',
    },
  },
});

const AppContainer = createAppContainer(AppStack);

export default AppContainer;
