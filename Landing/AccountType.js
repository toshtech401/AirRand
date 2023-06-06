import { View, Button, Text, StyleSheet, Image } from "react-native"
import { TouchableOpacity } from "react-native";
function AccountType({navigation}){
    return(
        <View style={{height:"100%"}}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.headerSkip}>
                <Text style={{color:"black"}}>Back</Text>
                <Image style={{marginTop:4}} source={require("../assets/backDark.png")} />
            </TouchableOpacity>
            <View style={{flexDirection: "row"}}>
                <Text style={{color:"#000000", fontSize:25, fontWeight:"700"}}> Choose </Text>
                <Text style={{color:"#EA1588", fontSize:25, fontWeight:"700"}}> Account Type </Text>
            </View>
            <Text>Select your account type for best experience.</Text>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Create")}>
                <Text style={{fontSize:22, fontWeight:"700"}}>As A Client</Text>
                <Text>Sign up as a client</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Create")}>
                <Text style={{fontSize:22, fontWeight:"700"}}>As A Tasker</Text>
                <Text>Sign up as a tasker</Text>
            </TouchableOpacity>

            <Text>Note: This can be change under setting in your profile.</Text>
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        paddingLeft:20,
        paddingRight:20,
        height:"100%",
        width:"100%",
        justifyContent:"center",
        gap:20
    },

    headerSkip : {
        position:"absolute",
        right:20,
        top:30,
        paddingVertical:15,
        flexDirection:"row",
        gap:10
    },
    
    btn:{
        padding:20,
        borderWidth:2,
        borderRadius:10,
        borderColor:"#F3F5FF"
    }
})

export default AccountType;