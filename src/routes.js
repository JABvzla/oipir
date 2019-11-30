import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Screens
import SendCurrencyScreen from '@send-currency-screen';
import HomeScreen from '@home-screen';
import CurrentBalance from '@current-balance';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SendCurrency: SendCurrencyScreen,
  },
  {
    defaultNavigationOptions: {},
    headerMode: 'none',
  },
);

export default createAppContainer(MainNavigator);
