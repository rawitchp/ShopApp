import { Pressable, ScrollView, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    const data = await fetch('https://dummyjson.com/products/').then((res) =>
      res.json()
    );
    // console.log(data.products);
    setProducts(data.products);
  };
  // console.log(products.products[0]);
  // console.log(products);

  return (
    <View className="flex-1 m-10 items-center">
      <ScrollView>
        {products.map((item) => {
          return <Text key={item.id}>{item.title}</Text>;
        })}
      </ScrollView>

      <Pressable
        onPress={getAllProducts}
        className="bg-red-500 rounded w-20 h-10 items-center justify-center"
      >
        <Text className="text-white">Fetch it!</Text>
      </Pressable>
    </View>
  );
}
