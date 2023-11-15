import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        width:'auto',
        flexDirection:'row',
        margin:10,
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#dbdbdb',
        padding:8,
        alignItems:'center',
        justifyContent:'space-between',
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:"grey"
    },
    icon:{
        color:'#0eec0e',
    },
    delIcon:{
        color:'red',
    },
    txt:{
        fontSize:20,
    },
    txts:{
        fontSize:20,
        width:100,
    },
    txtName:{
        fontSize:20,
        marginRight:60
    },
    txtRow:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
})

export default styles;