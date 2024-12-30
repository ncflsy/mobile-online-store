import { Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";
import products from "../../../assets/products.json";
import { FlatList } from "react-native-gesture-handler";
import ProductListItem from "./../component/ProductListItem";

export default function Index() {
  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} 
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }} // Jarak antar baris
        contentContainerStyle={{ padding: 12 }} 
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
