import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

export default class Race extends React.Component {

    render() {
        return (

            <View title="Race" style={styles.container}>
            <Card title="Race" >
                <TouchableOpacity style={styles.button} onPress={() => { alert("you chose human") }}>
                    <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/58ofz8gnv/human_regular_hair_2.png' }} />
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Human</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { alert("you chose elf") }}>
                    <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/jj7nl4akr/elf_regular_hair_1.png' }} />
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Elf</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { alert("you chose orc") }}>
                    <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/4ahq7pbuz/orc_regular_bald.png' }} />
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Orc</Text>
                </TouchableOpacity>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#595454',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#000000',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
    },
});


