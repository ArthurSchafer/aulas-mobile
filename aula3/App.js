import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
    <View
      style= {
        estilos.Tela
      }
    >
      <View>
      <Text style ={estilos.corTexto}>Subi num pé de pera porque a pera tava podi</Text>
      <Text style ={estilos.corTexto}>Subi num pé de pera porque a pera tava podi</Text>
      <Text style ={estilos.corTexto}>Subi num pé de pera porque a pera tava podi</Text>
      </View>
    <View style ={estilos.caixaRetangular}></View>
    <View style ={estilos.caixaQuadrada}></View>
      
    </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  corTexto: {
    color: '#0088FF'
  },
  Tela:{
        marginTop: 60,
        backgroundColor: '#000000ff'
  },
caixaRetangular:{
  width: 200,
  height: 50,
  backgroundColor: 'purple',
},
caixaQuadrada:{
  width: 120,
  height: 120,
  backgroundColor: 'green',
  borderRadius: 80
},
Centralizado:{
flex: 1,
alignItems: 'center',
justifyContent: 'center'
}
});