import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useEffect } from 'react';

const SplashScreen = ({navigation}) => { 

    function later(delay) {
        return new Promise(function (resolve) {
          setTimeout(resolve, delay);
        });
      }
      
      useEffect(() => {
        (async () => {
          await later(400).then(() => {
            navigation.replace("HomeScreen")
          })
        })()
      }, [])


    return (
        <SafeAreaView style={{alignItems:"center",justifyContent:'center',flex:1,backgroundColor:'#023047'}}>
            <Text style={{color:"#fefae0",fontSize:30, fontWeight:'500',fontStyle:'italic',textDecorationLine:'line-through'}}>
                Quiz
            </Text>
        </SafeAreaView>
    )
}
export default SplashScreen;

  