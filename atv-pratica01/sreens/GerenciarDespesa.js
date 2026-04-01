import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function GerenciarDespesa() {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  function onChange(event, selectedDate) {
    setShowPicker(false);

    if (selectedDate) {
      setData(selectedDate);
    }
  }

  function getDataFormatada(dataValue) {
    return (
      dataValue.getDate() +
      '/' +
      (dataValue.getMonth() + 1) +
      '/' +
      dataValue.getFullYear()
    );
  }

  function abrirPicker() {
    setShowPicker(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          maxLength={20}
          value={descricao}
          onChangeText={setDescricao}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Valor da Despesa</Text>
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          value={valor}
          onChangeText={setValor}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data da Despesa</Text>

        <Pressable onPress={abrirPicker}>
          <View style={styles.input}>
            <Text>{getDataFormatada(data)}</Text>
          </View>
        </Pressable>

        {showPicker && (
          <DateTimePicker
            value={data}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
}

export default GerenciarDespesa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    minHeight: 40,
    justifyContent: 'center',
  },
});