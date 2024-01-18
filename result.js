import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Result = ({ navigation, route }) => {
    const { score } = route.params
    return (

        <View style={{ alignItems: "center", justifyContent: 'center', flex: 1, backgroundColor: '#023047' }}>
            <View style={{margin:-10}}>
                <Text style={{ color: '#ffecd1', fontSize: 25, fontStyle: 'italic', textDecorationLine: 'underline' }}>Result</Text>
            </View>

            <View style={{ padding: 30 }}>
                <Text style={{ color: '#ffecd1', fontSize: 23, fontStyle: "italic" }}>
                   Your score :  {score}/10
                </Text>
            </View>

            <View style={{margin:100,paddingTop:40}} >
                <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                    <Text style={{ color: "#fefae0", backgroundColor: 'red', fontSize: 17, fontStyle: 'italic', padding: 10, fontWeight: "700", paddingHorizontal: 40, borderRadius: 10 }}>
                        RESTART
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Result; 
