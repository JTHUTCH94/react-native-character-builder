import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Card, FormLabel, FormInput, Button } from 'react-native-elements';


export function Name(props){
    return(
        <View>
            <FormLabel>Name</FormLabel>
            <FormInput  onInput={e => props.onInput(e)}/>
        </View>
    )
}

const mapStateToProps = (state) =>({
    name: state.name
});

export default connect(mapStateToProps)(Name);