
import { Link } from "expo-router";
import { MotiView } from "moti";
import { View, Text, Button } from "react-native";

export default function Home(){
  return(
    <MotiView 
      from={{opacity:0, translateY:20}} 
      animate={{opacity:1, translateY:0}} 
      style={{flex:1,justifyContent:'center',alignItems:'center'}}
    >
      <Text style={{fontSize:24,fontWeight:'bold'}}>CP3 - Estoque</Text>
      <Link href="/products"><Text>📦 Produtos</Text></Link>
      <Link href="/developers"><Text>👨‍💻 Desenvolvedor</Text></Link>
    </MotiView>
  );
}
