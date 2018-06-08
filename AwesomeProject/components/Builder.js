import React from 'react';
import { connect } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';
import { Card, FormLabel, FormInput, Button } from 'react-native-elements';
import Race from './Race';
import Class from './Class';
import Weapon from './Weapon';
import Name from './Name';
import { createCharacterAction, setName, setRace, setClassification, setWeapon, enterScreen } from '../actions/actions';


export class Builder extends React.Component {
    render() {
        return (
            <Card style={styles.container} >
                <Name onInput={e => this.props.dispatch(setName(e.target.value))}/>
                <Race onPress={e =>  this.props.dispatch(setRace(e.target.value))}/>
                <Class onPress={e => this.props.dispatch(setClassification(e.target.value))}/>
                <Weapon onPress={e => this.props.dispatch(setWeapon(e.target.value))}/>
                <Button style={styles.container} title="submit" value="Submit"  onPress={(e) => { e.preventDefault();this.props.dispatch(createCharacterAction(e)) }}/>
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
    button: {
        backgroundColor: '#000000',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20
    },
});

const mapStateToProps = (state) => ({
    characters: state.characters,
    name: state.name,
    race: state.race,
    classification: state.classification,
    weapon: state.weapon
});

export default connect(mapStateToProps)(Builder);