import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, View, Text } from 'react-native';

// Importando os Apps
import CronometroApp from './Apps/Cronometro';
import QuotesApp from './Apps/QuotesApp';
import FortuneCookieApp from './Apps/FortuneCookieApp';
import ContadorRestauranteApp from './Apps/ContadorRestauranteApp';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Escolha um aplicativo</Text>
			<View style={styles.buttonContainer}>
				<Button
					title='Cronômetro'
					onPress={() => navigation.navigate('Cronômetro')}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<Button
					title='Frases Motivacionais'
					onPress={() => navigation.navigate('Quotes')}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<Button
					title='Biscoito da Sorte'
					onPress={() => navigation.navigate('FortuneCookie')}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<Button
					title='Contador Restaurante'
					onPress={() => navigation.navigate('ContadorRestaurante')}
				/>
			</View>
		</View>
	);
}

// Rotas da aplicação
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='Cronômetro' component={CronometroApp} />
				<Stack.Screen name='Quotes' component={QuotesApp} />
				<Stack.Screen name='FortuneCookie' component={FortuneCookieApp} />
				<Stack.Screen
					name='ContadorRestaurante'
					component={ContadorRestauranteApp}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// Estilos do menu
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
	buttonContainer: {
		marginBottom: 20,
	},
});
