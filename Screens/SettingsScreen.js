import { Button, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
function SettingsScreen({navigation}){
    return(
        <View style={styles.container}>

            <View style={styles.headerStyle}>
                <Image source={require("../assets/menubar.png")} />
                <View style={{display:"flex", flexDirection:"row"}}>
                    <Text style={{color:"#2F3C7E"}}>Settings </Text>
                </View>

                <View style={{flexDirection:"row", gap:10, alignItems:"center"}}>
                    <Image source={require("../assets/badge.png")}/>
                    <Image source={require("../assets/notification.png")}/>
                    <View style={{backgroundColor:"grey", width:40, height:40, borderRadius:20}}></View>
                </View>
            </View>

            <View style={{ marginTop:10, paddingHorizontal:20}}>
                    <View>
                        <Text>Account Type</Text>
                    </View>

                    <TouchableOpacity style={{padding:20, borderColor:"#f8f8f8", borderWidth:2, borderRadius:15, marginTop:15}}>
                        <Text>As A Client</Text>
                    </TouchableOpacity>
                <View>
                    <View style={{marginTop:30}}>
                        <Text>General Settings</Text>
                    </View>

                    <TouchableOpacity style={{padding:10, borderColor:"#f8f8f8", borderWidth:2, borderRadius:15,alignItems:"center", marginTop:15, flexDirection:"row", justifyContent:"space-between"}}>
                        <Text>Wallet</Text>
                        <Image source={require("../assets/backDark.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10, borderColor:"#f8f8f8", borderWidth:2, borderRadius:15,alignItems:"center", marginTop:15, flexDirection:"row", justifyContent:"space-between"}}>
                        <Text>Profile</Text>
                        <Image source={require("../assets/backDark.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10, borderColor:"#f8f8f8", borderWidth:2, borderRadius:15,alignItems:"center", marginTop:15, flexDirection:"row", justifyContent:"space-between"}}>
                        <Text>Referrals</Text>
                        <Image source={require("../assets/backDark.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10, borderColor:"#f8f8f8", borderWidth:2, borderRadius:15,alignItems:"center", marginTop:15, flexDirection:"row", justifyContent:"space-between"}}>
                        <Text>Community</Text>
                        <Image source={require("../assets/backDark.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10, borderColor:"#f8f8f8", borderWidth:2, borderRadius:15,alignItems:"center", marginTop:15, flexDirection:"row", justifyContent:"space-between"}}>
                        <Text>Availability</Text>
                        <Image source={require("../assets/backDark.png")}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={{backgroundColor:"#EA1588", padding:20, borderRadius:10, alignItems:"center", marginTop:20, flexDirection:"row", gap:10, justifyContent:"center"}}>
                    <Image source={require("../assets/logout.png")}/>
                    <Text style={{color:"#ffffff"}}>Log Out</Text>
                </TouchableOpacity>
            </View>

            {/* ==================== Bottom Navigation ============== */}

            <View style={styles.bottomNavContainer}>

                <TouchableOpacity style={{borderColor:"red", padding:10}} onPress={()=>navigation.navigate("Home")}>
                <Image source={require("../assets/home.png")}/>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderColor:"red", padding:10}} onPress={()=>navigation.navigate("Search")}>
                <Image source={require("../assets/search.png")}/>
                    <Text>Search</Text>
                </TouchableOpacity >
                <TouchableOpacity style={{borderColor:"red", padding:10}} onPress={()=>navigation.navigate("Message")}>
                <Image source={require("../assets/message.png")}/>
                    <Text>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderColor:"red", padding:10}} onPress={()=>navigation.navigate("Task")}>
                <Image source={require("../assets/Task.png")}/>
                    <Text>Task</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigation.navigate("Settings")} style={{borderColor:"red", padding:10, borderStyle:"solid", borderTopColor:"#EA1588",borderTopWidth:4}}>
                <Image source={require("../assets/Profile.png")}/>
                    <Text>Settings</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    bottomNavContainer:{
        display: "flex",
        flexDirection:"row",
        justifyContent:"center",
        gap:5,
        position:"absolute",
        bottom:0,
        width:"100%",
        padding:10
    },
    container:{
        paddingVertical:10,
        height:"100%",
        width:"100%",
        paddingHorizontal:16,
        gap:10
    },
    headerStyle:{
        display:"flex",
        justifyContent:"space-between",
        paddingVertical:12,
        paddingHorizontal:12,
        flexDirection:"row",
        marginTop:20,
        alignItems:"center"
    },
    imageFlex:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between"
    }
})
export default SettingsScreen;
