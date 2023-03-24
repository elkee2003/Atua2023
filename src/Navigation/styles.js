import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    drawerContent:{
        backgroundColor:'#1c1c1b',
        padding:15,
    },
    userRow:{
        flexDirection:'row',
        alignItems:'center',
    },
    userImage:{
        backgroundColor:'#cacaca',
        width:50,
        height:50,
        borderRadius:50,
        marginRight:10
    },
    userProfile:{
        color:'white',
        fontSize:20,
    },
    userRate:{
        color:'lightgrey',
    },
    messageRow:{
        color:'white',
        borderTopWidth:1,
        borderBottomWidth: 1,
        borderColor:'#eee',
        paddingVertical: 5,
        marginVertical:10,
    },
    doMore:{
        color:'#dddddd',
        paddingVertical: 5,
    },
    makeMoney:{
        color:'white',
        paddingVertical: 5,
    }
})

export default styles;