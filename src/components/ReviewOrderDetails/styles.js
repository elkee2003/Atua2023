import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'#e4e1e1d9',
        justifyContent:'center',
    },
    txtRow:{
        margin:15
    },
    txtTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginLeft:10,
        marginBottom:5
    },
    txt:{
        color:'white',
        padding:10,
        backgroundColor:'#141212',
        borderRadius:25,
        fontSize:25,

    },
    btn:{
        width:150,
        height:70,
        marginTop:15,
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00ff40',
    },
    btnTxt:{
        fontWeight:'bold',
        fontSize:30,
        padding:10
    },
    bckBtn:{
        position:'absolute',
        top:20,
        left:10,
        backgroundColor:'#f11b2d',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        width:45,
        height:45,
    },
})

export default styles;