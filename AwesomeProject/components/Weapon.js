import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

export default class Weapon extends React.Component {

    render() {
        return (

            <View title="Weapon" style={styles.container}>
            <Card title="Weapon">
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Weapon</Text>

                <TouchableOpacity style={styles.button} onPress={() => { alert("you chose sword") }}>
                    <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/wnhtbp4wr/Sword.png' }} />
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Sword</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { alert("you chose mace") }}>
                    <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/bzj5x0h4b/Mace.png' }} />
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Mace</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { alert("you chose axe") }}>
                    <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/c5wv0dl6z/Axe.png' }} />
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Axe</Text>
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
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#000000',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20
    },
});


