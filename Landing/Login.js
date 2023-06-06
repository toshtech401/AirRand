import { Image, TouchableOpacity } from "react-native"
import { View, Button, Text, StyleSheet, TextInput } from "react-native"
export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.headerSkip} onPress={()=>navigation.navigate("Logside")}>
            <Text style={{fontSize:18}}>Back</Text>

            </TouchableOpacity>
            <View style={{flexDirection:"row", marginBottom:30}}>
                <Text style={{color:"#000000", fontSize:25, fontWeight:"700"}}> Log </Text>
                <Text style={{color:"#EA1588", fontSize:25, fontWeight:"700"}}> In</Text>
            </View>
            <View>
                <TextInput style={styles.input} placeholder="Enter your email" textContentType="emailAddress" />
            </View>

            <View>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            </View>

                <Text>By clicking continue mean you have agree to our </Text>
            <View style={styles.grp}>
                <Text style={{color:"#EA1588"}}>Terms </Text>
                <Text>and</Text>
                <Text style={{color:"#EA1588"}}>Conditions</Text>
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate("Interest")} style={{backgroundColor:"#EA1588", padding:20, borderRadius:10, alignItems:"center", marginVertical:30}}>
                <Text style={{color:"#fff"}}>Continue</Text>
            </TouchableOpacity>

            <Text style={{textAlign:"center"}}>Sign in with</Text>

            <View style={{flexDirection:"row", gap:10, justifyContent:"center", marginVertical:20}}>
                <View style={{backgroundColor:"#EA1588", padding:7, borderRadius:15}}>
                    <Image source={require("../assets/google.png")}/>
                </View>
                <View style={{backgroundColor:"#EA1588", padding:7, borderRadius:15}}>
                <Image source={require("../assets/facebook.png")}/>
                </View>
                <View style={{backgroundColor:"#EA1588", padding:7, borderRadius:15}}>
                    <Image source={require("../assets/apple.png")}/>
                </View>
            </View>
                <View style={{flexDirection:"row", gap:5, width:"100%", justifyContent:"center"}}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("Create")}>
                        <Text style={{color:"#EA1588"}}>Sign Up </Text>
                    </TouchableOpacity>
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
        gap:10
    },

    grp:{
        flexDirection:"row",
        gap:5,
        width:"100%"
    },
    headerSkip : {
        position:"absolute",
        right:20,
        top:35,
        fontSize:18
    },

    input:{
        backgroundColor:"#FFF5F6",
        color:"#000",
        padding:10,
        borderRadius:10
    }
})