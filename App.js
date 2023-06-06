import 'react-native-gesture-handler';
import { View} from "react-native";
import FirstPage from './Landing/FirstPage';
import { Text } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import CreateAccount from './Landing/CreateAccount';
import SearchScreen from './Screens/SearchScreen';
import MessageScreen from './Screens/MessageScreen';
import TaskScreen from './Screens/TaskScreen';
import SettingsScreen from './Screens/SettingsScreen';
import SecondPage from './Landing/SecondPage';
import Logside from './Landing/Logside';
import AccountType from './Landing/AccountType';
import Login from './Landing/Login';
import Giveaway from './Screens/GiveawayScreen';
import MyStack from './Navigator/Index';
import { NavigationContainer } from '@react-navigation/native';
function App(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}

export default App;
