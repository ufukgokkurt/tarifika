import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import React, {   useEffect, useState } from 'react';
import axios from 'axios';
import CategoryItem from '../components/CategoryItem';
import { CategoryType } from '../Types';

 

export default function Category() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = () => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => {
        console.log(response.data.categories);
        setCategories(response.data.categories);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <View style={styles.container}>
     {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
         <FlatList data={categories}
        keyExtractor={(item) => item.idCategory.toString()}
        renderItem={({ item }) => <CategoryItem  category={item}/> }
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
