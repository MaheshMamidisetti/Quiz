import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = ()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Quizler </Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        fontWeight:'600',
        backgroundColor:'#15616d',
        padding:15,
        borderRadius:10,
        color:'#ffecd1'
    },

    container:{
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    }
});
 