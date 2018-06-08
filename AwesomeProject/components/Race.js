import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { connect } from 'react-redux';

let radio_props = [
{ label: <Image style={{ width: 50, height: 50}} source={{ uri: 'https://s15.postimg.cc/58ofz8gnv/human_regular_hair_2.png' }} />, value: 'Human' },
    { label: <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/jj7nl4akr/elf_regular_hair_1.png' }} />, value: 'Elf' },
    { label: <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/4ahq7pbuz/orc_regular_bald.png' }} />, value: 'Orc' }
];

export function Race(props) {
    console.log(props.race);
    return (

        <Card title="Race" style={styles.container}>
                <RadioForm formHorizontal={false}
                    radio_props={radio_props}
                    initial={null}
                    labelHorizontal={true}
                    onPress={(e) => { props.onPress(e) }} />
                <Card style={styles.container}>
                    <Text>{props.race}</Text>
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
        marginBottom: 20,
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: 'black'
    }
});


const mapStateToProps = (state) => ({
    race: state.race
});

export default connect(mapStateToProps)(Race);