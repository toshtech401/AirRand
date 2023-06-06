import { ImageBackground, Text } from "react-native";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";

export default function SearchScreen(){
    return(
        <View style={styles.container}>

            <View style={styles.headerStyle}>
                <Button title="=" />
                <Text>Settings</Text>
            </View>

            <View>
                <Text style={{color:"#000", fontSize:22}}>Account Type</Text>
                <TouchableOpacity>
                    <Text>As A client</Text>
                </TouchableOpacity>

                <Text style={{color:"#000", fontSize:22}}>General Settings</Text>
                <TouchableOpacity>
                    <Text>Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Referrals</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Community</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Availability</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Text>Log Out</Text>
            </TouchableOpacity>


            {/* ==================== Bottom Navigation ============== */}

            <View style={styles.bottomNavContainer}>
                <TouchableOpacity style={styles.textContainer}>
                    <Text>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.textContainer}>
                    <Text>Search</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.textContainer}>
                    <Text>Message</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.textContainer}>
                    <Text>Task</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.activeContainer}>
                    <Text>Settings</Text>
                </TouchableOpacity>
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    bottomNavContainer:{
        display: "flex",
        position:"absolute",
        bottom:0
    },
    container:{
        paddingVertical:16,
        width:"50%",
        height:"100%"
    },
    headerStyle:{
        display:"flex",
        justifyContent:"space-between",
        borderBottomColor:"f8f8f8",
    },

    textContainer:{
        borderTopColor:"#ffffff"
    },
    active:{
        color:"#EA1588",
    },

    activeContainer:{
        borderTopColor:"#EA1588",
    }
})