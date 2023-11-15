import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'#fff',
        height:'100%',
    },
    textInput:{
        padding:10,
        backgroundColor:'#eee',
        marginVertical:5,
        marginLeft:20,
    },
    separator:{
        backgroundColor: '#efefef',
        height:1,
    },
    listView:{
        position:'absolute',
        top:105,
    },
    autocompleteContainer:{
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:7,
    },
    iconContainer:{
        backgroundColor:'#a2a2a2',
        padding:5,
        borderRadius:50,
        marginRight:15
    },
    locationText:{
    },
    circle:{
        width:5,
        height:5,
        backgroundColor:'black',
        position:'absolute',
        top:25,
        left:15,
        borderRadius:5,
    },
    line:{
        width:1,
        height:40,
        backgroundColor:'#919191',
        position:'absolute',
        top:36,
        left:16.5,
    },
    square:{
        width:5,
        height:5,
        backgroundColor:'black',
        position:'absolute',
        top:80,
        left:15,
    },
    gPoweredContainer:{
        display:'none'
    }
})

export default styles;