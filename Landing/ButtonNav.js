import { Button, View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function BottomNav(){
    return(
        <View style={styles.bottomNavContainer}>

            <TouchableOpacity style={{borderColor:"red", padding:10}}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderColor:"red", padding:10}}>
                <Text>Search</Text>
            </TouchableOpacity >
            <TouchableOpacity style={{borderColor:"red", padding:10}}>
                <Text>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderColor:"red", padding:10}}>
                <Text>Task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderColor:"red", padding:10, borderStyle:"solid", borderTopColor:"red",borderWidth:1,}}>
                <Text>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomNavContainer:{
        display: "flex",
        flexDirection:"row",
        position:"absolute",
        bottom:0,
        width:"100%",
        left:0,
        
    }
})