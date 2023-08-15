import { View, Text,SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch/useFetch';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import styles from "./Category.style"
const Category = ({navigation}) =>
{
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const { loading, data, error } = useFetch( url );
  const handleProductSelect = (category) => { navigation.navigate("FoodPage",{category})};
  const renderProduct = ( { item } ) =><CategoryCard category={item} onSelect={()=>handleProductSelect(item.strCategory)}/> ;
  
  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList data={ data.categories } renderItem={ renderProduct } keyExtractor={(item) => item.idCategory}  />
      
  
    </SafeAreaView>
  )
}

export default Category;