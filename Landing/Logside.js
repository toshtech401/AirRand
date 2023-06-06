import { Image, TouchableOpacity } from "react-native";
import { View, Button, StyleSheet, ImageBackground, Text} from "react-native";

function Logside({navigation}){

    return(
        <View style={{height:"100%"}}>
            <ImageBackground source={require("../assets/logsidebackground.png")}>

            <TouchableOpacity style={styles.headerSkip}>
                <Text style={{color:"#fff"}}>Skip</Text>
                <Image style={{marginTop:4}} source={require("../assets/back.png")}/>
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={{gap:30}}>

                        <TouchableOpacity style={{backgroundColor:"#2F3C7E", width:"100%", padding:20, borderRadius:15, alignItems:"center"}} onPress={()=>navigation.navigate("Login")}>
                            <Text style={{color:"#ffffff", fontWeight:"700"}}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  style={{backgroundColor:"#EA1588", width:"100%", padding:20, borderRadius:15,alignItems:"center"}} onPress={()=>navigation.navigate("Account")}>
                            <Text style={{color:"#ffffff", fontWeight:"700"}}>Create Account</Text>
                        </TouchableOpacity>

                </View>
            </View>
            </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        paddingLeft:20,
        paddingRight:20,
        height:"100%",
        justifyContent:"center"
    },

    headerSkip : {
        position:"absolute",
        right:20,
        top:25,
        paddingVertical:15,
        flexDirection:"row",
        gap:10
    }
})

export default Logside;