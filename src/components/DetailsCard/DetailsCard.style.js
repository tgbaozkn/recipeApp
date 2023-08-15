import { StyleSheet } from "react-native";



export default StyleSheet.create( {
    image: {
        height: 400,
        width: 400,
        margin:5,
        resizeMode:"contain"
    },
    container: {
        flex: 1,
 
        alignItems: "center",
        padding: 3,
        margin:3
    },
    category: {
        fontSize: 25,
        backgroundColor:"#DAA520",
       color:"white"
    },
    detail: {
        fontSize: 15,
        fontStyle: "italic",
        letterSpacing:.5,
        textTransform: "capitalize",
        marginTop: 5,
        padding:5,
        color:"#003366"
    },
    title: {
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: "bold",
        marginTop:10
    },

     linkButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    // Diğer stil özellikleri
    },
       price: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    // Diğer stil özellikleri
    },
        line: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
            marginVertical: 10,
    width:"100%"
  },
})