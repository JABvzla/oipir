import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Screens
import SendCurrencyScreen from '@send-currency-screen';
import HomeScreen from '@home-screen';
import SendResultScreen from '@send-result-screen';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SendCurrency: SendCurrencyScreen,
    SendResult: SendResultScreen,
  },
  {
    defaultNavigationOptions: {},
    headerMode: 'none',
  },
);

export default createAppContainer(MainNavigator);
