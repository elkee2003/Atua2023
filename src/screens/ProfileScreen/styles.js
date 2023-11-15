import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      position:'relative',
      height:'100%'
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
      },
      input: {
        margin: 10,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 5,
      },
      saveBackground:{
        alignItems:'center',
        backgroundColor:'#0059ff',
        padding: 15,
      },

      save:{
        fontSize:20,
        fontWeight:'500',
        color: 'white'
      },
      signOut:{
        padding: 20,
        marginTop:10,
        marginLeft:'auto',
        marginRight:'auto',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:'red',
        // borderColor:'red',
        // borderWidth:1,
      },
      gContainer:{
        height:'50%',
      },
      gTextInput:{
        
      },
      gTextInputContainer:{
        paddingLeft:10,
        paddingRight:10,
      },
      glistView:{
        paddingLeft:10,
        paddingRight:10
      },
      gPoweredContainer:{
        display:'none'
      }
      
})

export default styles;