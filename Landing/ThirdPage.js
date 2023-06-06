import { Image, Text, View, Button, TouchableOpacity} from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
function ThirdPage({navigation}){
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.headerSkip} onPress={()=>navigation.navigate("Logside")}>
            <Text>Skip</Text>
        </TouchableOpacity>
        <View style={styles.onboardi}>
            <Image source={require("../assets/third.png")} />
        </View>

        <View style={{display:"flex", flexDirection:"column", gap:20, width:"100%"}}>
                <View style={{display:"flex", flexDirection:"row", width:"100%"}}>
                    <Text style={{fontSize:24}}>Hire A </Text><Text style={{color:"#EA1588", fontSize:24}}>Professionals</Text>
                </View>
                <Text style={{marginBottom:20}}>Send Our Verified Professionals on Errand and Deliver at the Agreement Day.</Text>
                
                <View>
                    <TouchableOpacity style={styles.btnContainer} onPress={()=>navigation.navigate("Logside")}>
                        <Text style={styles.btn}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        height:"100%",
        width:"100%",
        justifyContent:"center",
        paddingHorizontal:30,
        gap:30,
        paddingTop:50,
        alignItems:"center"
    },

    headerSkip : {
        position:"absolute",
        right:20,
        top:30
    },

    onboard: {
        backgroundColor: "red",
        borderRadius: 50,
        paddingTop:20,
    },
    onboardi: {
        backgroundColor: "#FFF5F6",
        borderRadius: 110,
        paddingHorizontal:20
    },
    btnContainer:{
        paddingHorizontal:10,
        display:"flex",
        paddingVertical:10,
        backgroundColor:"#EA1588",
        alignItems:"center",
        borderRadius:10,
        paddingVertical:20,
    },
    btn:{
        color:"#ffffff"
    }
})

export default ThirdPage;