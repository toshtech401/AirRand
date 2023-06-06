import { Button, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
function MessageScreen({navigation}){
    return(
        <View style={styles.container}>

            <View style={styles.headerStyle}>
                <Image source={require("../assets/menubar.png")} />
                <View style={{display:"flex", flexDirection:"row"}}>
                    <Text style={{color:"#2F3C7E"}}>Message </Text>
                </View>

                <View style={{flexDirection:"row", gap:10, alignItems:"center"}}>
                    <Image source={require("../assets/badge.png")}/>
                    <Image source={require("../assets/notification.png")}/>
                    <View style={{backgroundColor:"grey", width:40, height:40, borderRadius:20}}></View>
                </View>
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:30}}>
                    <View>
                        <Text>All Messages</Text>
                    </View>

                    <TouchableOpacity>
                        <Image source={require("../assets/filter.png")}/>
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
                <TouchableOpacity onPress={navigation.navigate("Message")} style={{borderColor:"red", padding:10, borderStyle:"solid", borderTopColor:"#EA1588",borderTopWidth:4}}>
                <Image source={require("../assets/message.png")}/>
                    <Text>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderColor:"red", padding:10}} onPress={()=>navigation.navigate("Task")}>
                <Image source={require("../assets/Task.png")}/>
                    <Text>Task</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderColor:"red", padding:10}} onPress={()=>navigation.navigate("Settings")}>
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
export default MessageScreen;
