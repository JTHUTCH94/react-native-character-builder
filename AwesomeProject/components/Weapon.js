import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

let radio_props = [
    { label: <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/wnhtbp4wr/Sword.png' }} />, value: 'Cleric' },
        { label: <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/bzj5x0h4b/Mace.png' }} />, value: 'Knight' },
        { label: <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/c5wv0dl6z/Axe.png' }} />, value: 'Bard' }
    ];

export function Weapon(props) {
    return (

        <Card title="Weapon" style={styles.container}>
                <RadioForm formHorizontal={false}
                    radio_props={radio_props}
                    initial={null}
                    labelHorizontal={true}
                    onPress={(e) => { props.onPress(e) }} />
                <Card style={styles.container}>
                    <Text>{props.weapon}</Text>
                </Card>
        </Card>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#595454',
        alignItems: 'stretch',
        justifyContent: 'center'
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
    weapon: state.weapon
});

export default connect(mapStateToProps)(Weapon);