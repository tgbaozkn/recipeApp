import { View, Text , Image, Linking ,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from "./DetailsCard.style"
const DetailsCard = ( { data } ) =>
{
    const handleVideoLinkPress = () => {
    if (data.strYoutube) {
      Linking.openURL(data.strYoutube);
    }
  };
  return (
    <View style={styles.container}>
          <Text style={ styles.title }>{ data.strMeal }</Text>
            <Text style={ styles.category }>{ data.strArea }</Text>
          <Image source={ { uri: data.strMealThumb } } style={ styles.image } />
          <TouchableOpacity onPress={ handleVideoLinkPress } style={styles.linkButton}>
              <Text style={ styles.price }> WATCH ON YOUTUBE</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
      <Text style={ styles.detail }>-{ data.strInstructions }</Text>
    
     
    </View>
  )
}

export default DetailsCard