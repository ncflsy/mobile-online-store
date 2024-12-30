import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ProductListItem = ({ product }) => {
  return (
   <View className="border mx-1 border-gray-200 p-3 flex-1 gap-[5px] rounded-lg">
        <Image className="w-full h-52 object-cover rounded-lg mb-2" source={{ uri: product.image }} />
        <Text className="text-md font-semibold text-gray-800">{product.name}</Text>
        <View className="flex flex-row items-center gap-1">
            <Text className="font-semibold">4.5</Text>
            <Text className="font-light text-gray-500">(134 reviews)</Text>
        </View>
        <Text className="text-[16px] font-semibold text-gray-800 mb-3">${product.price}</Text>
        <Link href="/explore" className='w-full mt-auto bg-gray-700 text-white py-2 text-center rounded-md'>Lihat Produk</Link>
   </View>
  )
}

export default ProductListItem