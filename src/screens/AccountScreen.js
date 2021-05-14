import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/authContext';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';

const AccountScreen = () => {

	const { signout } = useContext(AuthContext);

	return (
		<SafeAreaView forceInset={{ top: 'always' }} style={styles.account}>
			<Spacer>
				<Text style={{ fontSize: 48, alignSelf: 'center' }}>Account Screen</Text>
			</Spacer>
			<Spacer>
				<Button title="Sign Out" onPress={signout} />
			</Spacer>
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
	account: {
		marginTop: 35
	}
});

export default AccountScreen;
