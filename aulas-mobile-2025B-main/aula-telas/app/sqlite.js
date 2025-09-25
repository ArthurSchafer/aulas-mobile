import { View, Text, Button, StyleSheet, FlatList, TextInput, Alert } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('expoSqlite.db');

db.execSync(`
  PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS despesas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL,
    valor REAL NOT NULL
  );
`);

function getDespesas() {
  return db.getAllSync('SELECT * FROM despesas');
}

function insertDespesa(descricao, valor) {
  db.runSync('INSERT INTO despesas (descricao, valor) VALUES (?, ?)', [descricao, valor]);
}

export default function SqliteScreen() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [despesas, setDespesas] = useState([]);

  function salvarDespesa() {
    const desc = descricao.trim();
    const val = parseFloat(valor);

    if (!desc) {
      Alert.alert("Erro", "Descrição não pode estar vazia.");
      return;
    }

    if (isNaN(val) || val <= 0) {
      Alert.alert("Erro", "Valor deve ser um número maior que zero.");
      return;
    }

    insertDespesa(desc, val);
    setDescricao("");
    setValor("");
    carregarDespesas();
  }

  function carregarDespesas() {
    const dados = getDespesas();
    setDespesas(dados);
  }

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>Despesas</Text>

      <View style={estilos.linhaEntrada}>
        <TextInput
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Descrição"
          style={estilos.campoTexto}
        />
        <TextInput
          value={valor}
          onChangeText={setValor}
          placeholder="Valor"
          keyboardType="numeric"
          style={estilos.campoTexto}
        />
        <Button title="Salvar" onPress={salvarDespesa} />
      </View>

      <Button title="Carregar despesas" onPress={carregarDespesas} />

      <FlatList
        data={despesas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Text style={estilos.textoItem}>
            - {item.descricao} | R$ {item.valor.toFixed(2)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  titulo: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8
  },
  linhaEntrada: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
    flexWrap: "wrap"
  },
  campoTexto: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    minWidth: "40%"
  },
  textoItem: {
    fontSize: 16,
    paddingVertical: 6
  },
  rodape: {
    flexDirection: "row",
    gap: 8,
    marginTop: 12
  }
});
