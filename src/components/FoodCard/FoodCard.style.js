import { StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    height: 200,
        width: "auto",
        minWidth:400,
       

    justifyContent: "flex-end",
    },
    img: {
        borderRadius: 20,
       
    },
  container: {
   
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
      margin: 5,
      borderRadius: 20,
          overflow:"hidden",
     
  },
  text: {
    color: "white",
    fontSize: 42,
    maxHeight: 50,
    paddingStart:10,
    fontWeight: "bold",
    textAlign: "right",
      backgroundColor: "#00000080",
     
  },
});
