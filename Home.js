import { View,Text,TouchableOpacity ,SafeAreaView} from "react-native";

const HomeScreen =({navigation})=> {
  return(
    
      
      <SafeAreaView style={{alignItems:"center",justifyContent:'center',flex:1,backgroundColor:'#023047'}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Quiz')}}>
            <Text style={{color:"#fefae0",backgroundColor:'red',fontSize:17,fontStyle:'italic',padding:10,fontWeight:"700",paddingHorizontal:30,borderRadius:10}}>
                START
            </Text>
            </TouchableOpacity>
        </SafeAreaView>
        
    )
}

export default HomeScreen;