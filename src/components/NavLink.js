import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import { withNavigation} from 'react-navigation';

const NavLink = ({ navigation, routeName, text}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.link}>
                    {text}
                </Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);