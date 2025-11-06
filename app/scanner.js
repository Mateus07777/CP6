
import { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useRouter } from "expo-router";

export default function Scanner(){
  const [perm,setPerm]=useState(null);
  const [scanned,setScanned]=useState(false);
  const router=useRouter();

  useEffect(()=>{
    (async()=>{
      const {status}=await BarCodeScanner.requestPermissionsAsync();
      setPerm(status==='granted');
    })();
  },[]);

  if(perm===null) return <Text>Solicitando permissão...</Text>;
  if(perm===false) return <Text>Permissão negada</Text>;

  return(
    <View style={{flex:1}}>
      <BarCodeScanner 
        onBarCodeScanned={scanned? undefined:(data)=>{
          setScanned(true);
          router.push(`/productNew?barcode=${data.data}`);
        }}
        style={{flex:1}}
      />
    </View>
  );
}
