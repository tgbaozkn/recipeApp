import { View, Text,ImageBackground,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from "./FoodCard.style"
const FoodCard = ({food, onSelect}) => {
    return (
      <TouchableWithoutFeedback  onPress={onSelect}>
   <View style={styles.container}>
    
          <ImageBackground source={ { uri: food.strMealThumb } } style={ styles.image } imageStyle={styles.img}  >
                <Text style={ styles.text }>{ food.strMeal}</Text>
      </ImageBackground>

            </View>
            </TouchableWithoutFeedback>
  )
}

export default FoodCard