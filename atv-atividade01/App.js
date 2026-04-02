import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import IconButton from './components/IconButton';
import DespesaRecente from './screens/DespesaRecente';
import GerenciarDespesa from './screens/GerenciarDespesa';
import TodasDespesas from './screens/TodasDespesas';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottonTabScreen() {
  return(
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <IconButton
            icon="add"
            size={24}
            color="black"
            onPress={() => {
              navigation.navigate('GerenciarDespesa');
            }}
          />
        ),
        headerStyle: { backgroundColor: 'white', elevation: 0, shadowOpacity: 0 }, 
        headerTintColor: 'black',
      })}
    >
      <Tab.Screen name="DespesaRecente" component={DespesaRecente}
          options={{
            tabBarIcon: ({color, size}) => (<Ionicons name="hourglass" size={size} color={color} />),
            tabBarLabel: 'Recentes',
            title: 'Despesas Recentes',
            tabBarLabelStyle: { fontSize: 12 }
          }}
      />
      <Tab.Screen name="TodasDespesas" component={TodasDespesas}
          options={{
            tabBarIcon: ({color, size}) => (<Ionicons name="wallet-outline" size={size} color={color} />),
            tabBarLabel: 'Todas',
            title: 'Todas as Despesas',
            tabBarLabelStyle: { fontSize: 12 }
          }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen name="Despesas" component={BottonTabScreen} options={{headerShown:false}}/>
        <Stack.Screen name="GerenciarDespesa" component={GerenciarDespesa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});