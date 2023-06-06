import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import AccountType from "../Landing/AccountType";
import CreateAccount from "../Landing/CreateAccount";
import FirstPage from "../Landing/FirstPage";
import InterestPage from "../Landing/InterestPage";
import Login from "../Landing/Login";
import Logside from "../Landing/Logside";
import SecondPage from "../Landing/SecondPage";
import ThirdPage from "../Landing/ThirdPage";
import Giveaway from "../Screens/GiveawayScreen";
import HomeScreen from "../Screens/HomeScreen";
import MessageScreen from "../Screens/MessageScreen";
import SearchScreen from "../Screens/SearchScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import TaskScreen from "../Screens/TaskScreen";

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="First" component={FirstPage} options={{headerShown:false}} />
            <Stack.Screen name="Second" component={SecondPage} options={{headerShown:false}} />
            <Stack.Screen name="Third" component={ThirdPage} options={{headerShown:false}}/>
            <Stack.Screen name="Logside" component={Logside} options={{headerShown:false}}/>
            <Stack.Screen name="Account" component={AccountType} options={{headerShown:false}} />
            <Stack.Screen name="Create" component={CreateAccount} options={{headerShown:false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="Interest" component={InterestPage} options={{headerShown:false}} />
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
            <Stack.Screen name="Message" component={MessageScreen} options={{headerShown:false}} />
            <Stack.Screen name="Task" component={TaskScreen} options={{headerShown:false}} />
            <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}} />
            <Stack.Screen name="Giveaway" component={Giveaway} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

export default MyStack;