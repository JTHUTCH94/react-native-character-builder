import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

let radio_props = [
    { label: <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/kn5k2scd7/Cross_1.png' }} />, value: 'Cleric' },
        { label: <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/nd5p8gca3/Helmet.png' }} />, value: 'Knight' },
        { label: <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/3qbvw8a63/Harp.png' }} />, value: 'Bard' }
    ];

export function Class(props) {
    return (

        <Card title="Class" style={styles.container}>
                <RadioForm formHorizontal={false}
                    radio_props={radio_props}
                    initial={null}
                    labelHorizontal={true}
                    onPress={(value) => { props.onPress(value) }} />
                <Card style={styles.container}>
                    <Text>{props.classification}</Text>
                </Card>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#595454',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#000000',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20
    },
    text: {
        fontWeight: 'bold',
        color: 'black'
    }
});

const mapStateToProps = (state) => ({
    classification: state.classification
});

export default connect(mapStateToProps)(Class);
