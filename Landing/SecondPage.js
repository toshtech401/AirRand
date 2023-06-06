import { Image, Text, View, TouchableOpacity} from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
function SecondPage({navigation}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.headerSkip} onPress={()=>navigation.navigate("Logside")}>
                <Text>Skip</Text>
            </TouchableOpacity>
            <View style={styles.onboardi}>
                <Image source={require("../assets/second.png")} />
            </View>

            <View style={{display:"flex", flexDirection:"column", gap:20, width:"100%"}}>
                <View style={{display:"flex", flexDirection:"row", width:"100%"}}>
                    <Text style={{fontSize:24, textAlign:"center"}}>Fast </Text><Text style={{color:"#EA1588", fontSize:24}}>Transaction</Text>
                </View>
                <Text style={{marginBottom:20, textAlign:"center"}}>Quick and easy payment transaction without delay. Get Paid Immediately To Your Account</Text>
                

                <View>
                <TouchableOpacity style={styles.btnContainer} onPress={()=>navigation.navigate("Third")}>
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
        top:40
    },

    onboardi: {
        backgroundColor: "#FFF5F6",
        borderRadius: 110,
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
export default SecondPage;