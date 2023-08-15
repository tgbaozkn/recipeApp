import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from "./Food.style"
import useFetch from '../../hooks/useFetch/useFetch';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import FoodCard from '../../components/FoodCard/FoodCard';
const Food = ({ route, navigation }) => {
   const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${ route.params.category }`;
   const { loading, error, data } = useFetch( apiUrl );
  

    const onSelect = (name) =>  { navigation.navigate("DetailsPage",{name})};
    const renderFood = ( { item } ) => <FoodCard food={ item } onSelect={()=>onSelect(item.strMeal)} />;
  return (
      <View>
          <FlatList
              data={ data.meals }
              renderItem={ renderFood }
          />
   </View>
  )
}

export default Food