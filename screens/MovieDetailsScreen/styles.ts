import {StyleSheet} from "react-native"


const styles = StyleSheet.create({
    image: {
        width:"100%",
        aspectRatio: 16/9,
        resizeMode:"cover",
    },
    match: {
        color:"#00aa00",
        fontWeight:"bold",
        marginRight:5,
    },
    age: {
        color:"black",
        fontWeight:"bold",
    },
    year: {
        color:"#757575",
        marginRight:5
    },
    
    ageContainer: {
        backgroundColor:"#e6e229",
        justifyContent:"center",
        borderRadius:2,
        paddingHorizontal:3,
        alignItems:"center",
        marginRight:5
    },
    title: {
        fontSize:24,
        fontWeight:"bold",
    },
    playButton:{
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        borderRadius:3,
        marginVertical:5
    },
    playButtonText:{
        color:"black",
        fontSize:16,
        fontWeight:"bold"
    },
    donwnloadPlayButton:{
        backgroundColor:"#2b2b2b",
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        borderRadius:3,
        marginVertical:5


    },
    downloadButtonText:{
        color:"white",
        fontSize:16,
        fontWeight:"bold"
    }
  });

  export default styles;
  