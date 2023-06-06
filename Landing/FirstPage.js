import { Image, Text, View, Button, TouchableOpacity} from "react-native";
import { StyleSheet } from "react-native";

function FirstPage({navigation}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.headerSkip} onPress={()=>navigation.navigate("Logside")}>
                <Text>Skip</Text>
            </TouchableOpacity>
            <View style={styles.onboardi}>
                <Image source={require("../assets/onboard.png")} />
            </View>

            <View style={{display:"flex", flexDirection:"column", gap:20, width:"100%"}}>
                <View style={{display:"flex", flexDirection:"row"}}>
                    <Text style={{fontSize:24}}>Let Take </Text><Text style={{color:"#EA1588", fontSize:24}}>The Stress</Text>
                </View>
                <Text style={{marginBottom:20}}>Don't take the stress of doing it on your own. Our professionals are ready to assist you!</Text>
                <View>
                <TouchableOpacity style={styles.btnContainer} onPress={()=> navigation.navigate("Second")}>
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

export default FirstPage;