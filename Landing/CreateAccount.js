import { Image, TouchableOpacity } from "react-native"
import { View, Button, Text, StyleSheet, TextInput } from "react-native"
function CreateAccount({navigation}){
    return(
        <View>        
        <Text style={styles.headerSkip}>Back</Text>
        <View style={styles.container}>
            <View style={{flexDirection:"row"}}>
                <Text style={{color:"#000000", fontSize:25, fontWeight:"700"}}> Create </Text>
                <Text style={{color:"#EA1588", fontSize:25, fontWeight:"700"}}> Account</Text>
            </View>
            <View>
                <TextInput style={styles.input} placeholder="Username" />
            </View>

            <View>
                <TextInput style={styles.input} placeholder="Enter your email" textContentType="emailAddress" />
            </View>

            <View>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            </View>

            <View>
                <Text>By clicking continue mean you have agree to our </Text>
                <View style={styles.grp}>
                    <Text style={{color:"#EA1588"}}>Terms </Text>
                    <Text>and</Text>
                    <Text style={{color:"#EA1588"}}>Conditions</Text>
                </View>
            </View>
            <TouchableOpacity style={{backgroundColor:"#EA1588", borderRadius:10, padding:20, alignItems:"center"}} onPress={()=>navigation.navigate("Login")}>
                <Text style={{color:"#fff"}}>Continue</Text>
            </TouchableOpacity>
            <View>
                <Text style={{textAlign:"center"}}>Sign up with</Text>

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
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Text style={{color:"#EA1588"}}>Sign In </Text>
            </TouchableOpacity>
        </View>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        paddingHorizontal:30,
        height:"100%",
        width:"100%",
        gap:30,
        marginTop:100
    },

    headerSkip : {
        position:"absolute",
        right:20,
        top:30
    },
    input:{
        backgroundColor:"#FFF5F6",
        color:"#000",
        padding:10
    },
    grp:{
        flexDirection:"row",
        gap:5,
        width:"100%"
    },
    
})
export default CreateAccount;