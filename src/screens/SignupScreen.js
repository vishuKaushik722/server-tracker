import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from "../components/NavLink";
import { Context as AuthContext } from '../context/authContext';

const SignupScreen = ({ navigation }) => {
	const { state, signup, clearErrorMessage } = useContext(AuthContext);


	return (
		<View style={styles.container}>
			<NavigationEvents
				onWillFocus = {clearErrorMessage}
			/>
			<AuthForm
				headerText="Sign up for Tracker"
				errorMessage={state.errorMessage}
				submitButtonText="Sign Up"
				onSubmit={signup}
			/>
			<NavLink
				text="Already have an account? Sign in instead"
				routeName="Signin"
			/>
		</View>
	);
};

SignupScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1, // so that parent view fills as much space on screen as it can
		justifyContent: "center",
		marginBottom: 200,
	},
});

export default SignupScreen;
