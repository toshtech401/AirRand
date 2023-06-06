import { Button, Image, StyleSheet, Text, View, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
function HomeScreen({navigation}){
    return(
        <View style={styles.container}>

            <View style={styles.headerStyle}>
                <Image source={require("../assets/menubar.png")} />
                <View style={{display:"flex", flexDirection:"row"}}>
                    <Text style={{color:"#2F3C7E"}}>Air</Text>
                    <Text style={{color:"#EA1588"}}>Rand</Text>
                </View>

                <View style={{flexDirection:"row", gap:10, alignItems:"center"}}>
                    <Image source={require("../assets/badge.png")}/>
                    <Image source={require("../assets/notification.png")}/>
                    <View style={{backgroundColor:"grey", width:40, height:40, borderRadius:20}}></View>
                </View>
            </View>

            <View style={{backgroundColor:"#EA1588", width:"100%", borderRadius:10, padding:15}}>
                <View style={{display: "flex", justifyContent:"space-between", flexDirection:"row"}}>
                    <Text style={{color:"white"}}>Welcome *Name* </Text>
                    <TouchableOpacity>
                        <Text style={{color:"#fff", fontSize:16}}>Get Started</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{color:"white", marginTop:10}}>You’re one way in. complete your KYC verification</Text>
            </View>

            <FlatList>
                <View style={{flexDirection: "row"}}>
                    <Text style={{color:"#000000", fontSize:20}}> Latest </Text>
                    <Text style={{color:"#EA1588", fontSize:20}}> Update </Text>
                </View>

                <View style={styles.imageFlex}>
                    <Image source={require("../assets/Rectangle.png")} />
                    <Image source={require("../assets/Rectangle2.png")} />
                    <Image source={require("../assets/Rectangle3.png")} />
                </View>

                <View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={{color:"#000000", fontSize:20}}>Client </Text>
                        <Text style={{color:"#EA1588", fontSize:20}}>Request </Text>
                    </View>
                    <Text>Send your offer to your clients</Text>
                </View>

                <View style={{gap:25}}>
                    <View style={{display:"flex", flexDirection:"row", gap:20}}>
                        <View style={{width:"70%", gap:10}}>
                            <Text style={{fontSize:18, fontWeight:"700"}}>Looking for an experience designer</Text>
                            <Text>Hello everyone! I’m looking for an experience graphics.... </Text>
                        </View>

                        <View style={{flexDirection:"column", gap:30, width:"30%"}}>
                            <Text>Price: undefined</Text>
                            <Text style={{color:"#EA1588"}}>Show details</Text>
                        </View>
                    </View>

                    <View style={{display:"flex", flexDirection:"row", gap:20}}>
                        <View style={{width:"70%", gap:10}}>
                            <Text style={{fontSize:18, fontWeight:"700"}}>Well-organized designer</Text>
                            <Text>Hello everyone! I’m looking for an experience graphics....  </Text>
                        </View>
                        <View style={{flexDirection:"column", gap:30, width:"30%"}}>
                        <Text>Price:  10k+ per hours</Text>
                        <Text style={{color:"#EA1588"}}>Show details</Text>
                        </View>
                    </View>
                </View>
            </FlatList>

            {/* ==================== Bottom Navigation ============== */}

            <View style={styles.bottomNavContainer}>

                <TouchableOpacity style={{borderColor:"red", padding:10, borderStyle:"solid", borderTopColor:"#EA1588",borderTopWidth:4}}>
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
        justifyContent:"space-between",
        position:"absolute",
        bottom:0,
        width:"100%",
    },
    container:{
        paddingVertical:10,
        height:"100%",
        width:"100%",
        paddingHorizontal:10,
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
export default HomeScreen;