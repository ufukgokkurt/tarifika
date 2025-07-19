import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MealItem from '../components/MealItem';
 

export default function ProductList({route}: any) {
  const {categoryName}= route.params;
   
const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMeals = () => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + categoryName)
      .then((response) => {
        console.log(response.data.meals);
        setMeals(response.data.meals);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching meals:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMeals();
  }, []);
  return (
    <View style={styles.container}>
     {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
         <FlatList data={meals}
        keyExtractor={(item) => item.idMeal.toString()}
        renderItem={({ item }) => <MealItem  meal={item}/> }
          /> 
       )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
  },
});