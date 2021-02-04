import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import DetailScreen from './src/screens/DetailScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Details: DetailScreen,
},
{
  initialRouteName: "Search",
  defaultNavigationOptions:{
    title: 'Food app'
  }
});

export default createAppContainer(navigator);