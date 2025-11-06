
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

export default function NewProduct(){
  const router=useRouter();
  const [name,setName]=useState("");
  const [fab,setFab]=useState("");
  const [valid,setValid]=useState("");
  const [quantity,setQuantity]=useState("");
  const [batch,setBatch]=useState("");
  const [barcode,setBarcode]=useState("");
  const [state,setState]=useState("");

  async function save(){
    const data = await SecureStore.getItemAsync("products");
    const list = data? JSON.parse(data):[];
    list.push({
      id: Date.now(),
      name, fab, valid, quantity, batch, barcode, state
    });
    await SecureStore.setItemAsync("products", JSON.stringify(list));
    router.push("/products");
  }

  return(
    <View style={{padding:20}}>
      <Text>Nome:</Text>
      <TextInput onChangeText={setName} style={{borderWidth:1}}/>

      <Text>Fabricação:</Text>
      <TextInput onChangeText={setFab} style={{borderWidth:1}}/>

      <Text>Validade:</Text>
      <TextInput onChangeText={setValid} style={{borderWidth:1}}/>

      <Text>Quantidade:</Text>
      <TextInput onChangeText={setQuantity} style={{borderWidth:1}}/>

      <Text>Lote:</Text>
      <TextInput onChangeText={setBatch} style={{borderWidth:1}}/>

      <Link href="/scanner"><Text>📷 Ler Código de Barras</Text></Link>

      <Button title="Salvar" onPress={save}/>
    </View>
  );
}
