import React from 'react';
import { StyleSheet, Button, View, Text, ScrollView } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

export default class Login extends React.Component{

render(){
    return(
        <View style={styles.container}>
            <FormLabel>Username</FormLabel>
            <FormInput />
            <FormLabel>Password</FormLabel>
            <FormInput />
            <FormLabel>Verify Password</FormLabel>
            <FormInput />
        </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#595454',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});