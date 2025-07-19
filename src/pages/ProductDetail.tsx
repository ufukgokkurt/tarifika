import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductDetail({ route }: any) {
  const { mealId } = route.params;

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMeals = () => {
    axios
      .get(
        'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId,
      )
      .then(response => {
        setMeals(response.data.meals[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching meals:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMeals();
  }, []);
  return (
    <View style={styles.container}>
      <Image source={{ uri: meals.strMealThumb }} style={styles.image} />
      <View style={styles.content}>
      <Text style={styles.title}>{meals.strMeal}</Text>
      <Text style={styles.area}>{meals.strArea}</Text>
      <Text style={styles.description}>{meals.strInstructions}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
 
  },
  content: {
 
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#A5292A',
  },
  area: {
    fontSize: 18,
    color: '#A5292A',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});
