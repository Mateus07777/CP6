
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { Link } from "expo-router";

export default function Products(){
  const [items,setItems]=useState([]);

  useEffect(()=>{load();},[]);

  async function load(){
    const data = await SecureStore.getItemAsync("products");
    setItems(data? JSON.parse(data):[]);
  }

  return(
    <View style={{flex:1,padding:20}}>
      <Link href="/productNew"><Text style={{fontSize:18}}>➕ Novo Produto</Text></Link>
      <FlatList 
        data={items}
        renderItem={({item})=>(
          <Link href={`/productEdit?id=${item.id}`}>
            <Text style={{padding:10,borderWidth:1,margin:5}}>
              {item.name} - {item.quantity} un
            </Text>
          </Link>
        )}
      />
    </View>
  );
}
