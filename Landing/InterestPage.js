import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
function InterestPage({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.headerSkip} onPress={()=>navigation.navigate("Login")}>Back</Text>
            <View style={{flexDirection:"row"}}>
                <Text style={{color:"#000000", fontSize:25}}> Your </Text>
                <Text style={{color:"#EA1588", fontSize:25}}> Field</Text>
            </View>
            <Text>You can only select one (1) field from the following</Text>
            <View style={styles.grid}>
                <View>

                    <TouchableOpacity style={styles.selecActivetBtn}>
                        <Text>Graphic Design</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Programming</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Ui/Ux Design</Text>
                    </TouchableOpacity>

                </View>
                
                <View>
                
                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Plumbing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Furniture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Cleaning</Text>
                    </TouchableOpacity>

                </View>
                <View>
        
                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Tutoring</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Management</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Production</Text>
                    </TouchableOpacity>

                </View>
            </View>
            
            <TouchableOpacity style={{justifyContent:"flex-end", flexDirection:"row"}}>
                <Text style={{color:"#EA1588", textDecorationLine:"underline", textDecorationColor:"#EA1588"}}>See All</Text>
            </TouchableOpacity>

            <View style={{flexDirection:"row", gap:5}}>
                <Text style={{color:"#000000", fontSize:25}}> Your </Text>
                <Text style={{color:"#EA1588", fontSize:25}}> Skillset</Text>
            </View>
            <Text>Select five (5) skills from the following</Text>
            <View style={styles.grid}>
                <View>

                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Logo Design</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Banner Design</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Package Design</Text>
                    </TouchableOpacity>

                </View>
                <View>

                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Web Design</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Vector Design</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Label Design</Text>
                    </TouchableOpacity>

                </View>
                <View>

                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Book Cover</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Bill Board</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectBtn}>
                        <Text>Font Design</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <TouchableOpacity style={{justifyContent:"flex-end", flexDirection:"row"}}>
                <Text style={{color:"#EA1588", textDecorationLine:"underline", textDecorationColor:"#EA1588"}}>See All</Text>
            </TouchableOpacity>
            <View style={{flexDirection:"row"}}>
                <Text style={{color:"#000000", fontSize:25}}> Your </Text>
                <Text style={{color:"#EA1588", fontSize:25}}> Location</Text>
            </View>
            <Text>Choose Your Location</Text>

            <TextInput style={{backgroundColor:"#f8f8f8", padding:16}} placeholder="location" />
            
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Home")}>
                <Text style={{color:"#fff"}}>Continue</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        paddingHorizontal:20,
        height:"100%",
        width:"100%",
        justifyContent:"center",
        gap:5,
        paddingTop:10
    },

    headerSkip : {
        position:"absolute",
        right:20,
        top:40
    },
    grid:{
        display:"flex",
        flexDirection:"row"

    },

    selectBtn:{
        width:"100%",
        justifyContent:"center",
        padding:10,
    },

    selecActivetBtn:{
        backgroundColor:"#EA1588",
        width:"100%",
        justifyContent:"center",
        padding:10,
    },
    btn:{
        backgroundColor:"#EA1588",
        borderRadius:16,
        width:"100%",
        justifyContent:"center",
        padding:20,
        alignItems:"center",
        marginTop:30,
    },
    
})
export default InterestPage;