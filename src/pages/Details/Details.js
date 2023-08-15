import { View, Text,Image } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch/useFetch';
import styles from "./Details.style"
import { FlatList } from 'react-native-gesture-handler';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
const Details = ( { route } ) =>
{
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${route.params.name}`;
   
    const { loading, error, data } = useFetch( apiUrl );
  
     const renderProduct = ( { item } ) =><DetailsCard data={item}/> ;
  return (
   <FlatList data={data.meals} renderItem={renderProduct} />
  )
}

export default Details;