import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Screens
import SendCurrencyScreen from '@send-currency-screen';
import HomeScreen from '@home-screen';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    SendCurrency: {screen: SendCurrencyScreen},
  },
  {
    navigationOptions: {header: {visible: false}},
  },
);

const App = createAppContainer(MainNavigator);

export default App;
