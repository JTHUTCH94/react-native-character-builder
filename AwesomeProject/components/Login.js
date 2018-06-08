import React from 'react';
import { StyleSheet, Button, View, Text, ScrollView } from 'react-native';
import {Field, reduxForm, focus} from 'redux-form';
import {login} from '../actions/auth';
import { FormLabel, FormInput, Card } from 'react-native-elements';

export default class Login extends React.Component {

    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        
        return (
            <Card style={styles.container}>
                <FormLabel>Username</FormLabel>
                <FormInput />
                <FormLabel>Password</FormLabel>
                <FormInput />
                <FormLabel>Verify Password</FormLabel>
                <FormInput />
                <Button title="Login" onPress={()=> alert('logged in')}>Login</Button>
            </Card>
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