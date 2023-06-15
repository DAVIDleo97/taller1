import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../Screens/Login";
import CheckIn from "../Screens/CheckIn";
import Game from "../Screens/Game";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CheckIn" component={CheckIn} />
    </Stack.Navigator>
  );
}

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
