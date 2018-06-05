import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

export default class Class extends React.Component {

    render() {
        return (

            <View title="Class" style={styles.container}>
            <Card title="Class">
                <Text style={{color: 'white', fontWeight: 'bold'}}>Class</Text>
                <TouchableOpacity style={styles.button} onPress={() => { alert("you chose cleric") }}>
                    <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/kn5k2scd7/Cross_1.png' }} />
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Cleric</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { alert("you chose knight") }}>
                <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/nd5p8gca3/Helmet.png' }} />
                <Text style={{color: 'white', fontWeight: 'bold'}}>Knight</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { alert("you chose bard") }}>
                <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://s15.postimg.cc/3qbvw8a63/Harp.png' }} />
                <Text style={{color: 'white', fontWeight: 'bold'}}>Bard</Text>
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
        marginBottom: 20
    },
});


