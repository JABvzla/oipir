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
    defaultNavigationOptions: {
      headerStyle: {
        height: 150,
        borderBottomWidth: 1,
        borderColor: '#000',
      },
      headerLeft: null,
      headerRight: null,
      headerBackgroundTransitionPreset: 'translate',
      headerTitle: CurrentBalance,
    },
    headerMode: 'float',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
