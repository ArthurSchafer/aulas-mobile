import { ScrollView, View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View>
        <Text style={estilos.titulo}>React Native</Text>
        <Text style={estilos.subtitulo}>Avaliação dia 27/08</Text>
      </View>
      <View style={estilos.cartao}>
        <Text style={estilos.tituloCartao}>Batatas são macias</Text>
      </View>
      <View style={estilos.centralizado}>
      <Button title="Enviar" color="#0165faff" onPress={() => {}} />
        </View>
    </SafeAreaView>
  );
}
const estilos = StyleSheet.create({
  areaSegura: {
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "700"
  },
  subtitulo: {
    color: "#475569"
  },
  cartao: {
    marginLeft: 120,
    marginTop: 500,
    width: "40%",
    backgroundColor: "#f1f5f9",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    marginBottom: 12,
  },
  centralizado: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
})