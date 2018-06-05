import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, FormLabel, FormInput } from 'react-native-elements';
import Race from './Race';
import Class from './Class';
import Weapon from './Weapon';

export default class Builder extends React.Component {
    render() {
        return (
            <Card style={styles.container}>
                <FormLabel>Name</FormLabel>
                <FormInput />
                <Race />
                <Class />
                <Weapon />
            </Card>
        );
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

