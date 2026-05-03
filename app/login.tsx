// Tela de Login com integração a API (React Native + Expo)
// Utiliza apenas recursos básicos (fetch) sem libs externas

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import { useRouter } from 'expo-router';
import Button from '../components/ui/Button';

export default function LoginScreen() {

  const router = useRouter();
  
  // Estados principais
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // controla loading
  const [error, setError] = useState<string | null>(null); // mensagens de erro

  // Função de login integrada com API
  const handleLogin = async () => {
    setError(null);

    // Validação básica
    if (!email || !password) {
      setError('Preencha todos os campos');
      return;
    }

    try {
      setLoading(true);

      // Exemplo de endpoint (substitua pela sua API real)
      const response = await fetch('SEU_ENDPOINT_DE_LOGIN', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await response.json();

      // Verifica se a requisição foi bem-sucedida
      if (!response.ok) {
        throw new Error(data.error || 'Erro ao fazer login');
      }

      // Token retornado pela API
      const token = data.token;

      console.log('Token:', token);

      // Aqui você pode salvar o token (AsyncStorage) ou navegar
      alert('Login realizado com sucesso!');

    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>

      {/* Título */}
      <Text style={styles.title}>Login</Text>

      {/* Input Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Input Senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Exibição de erro */}
      {error && <Text style={styles.error}>{error}</Text>}

      {/* Botão */}
      <Button title={loading ? 'Entrando...' : 'Entrar'} onPress={handleLogin} loading={loading} />
      <Button title="Cadastrar" onPress={() => router.push('/cadastro')} ghost />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff'
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  error: {
    color: 'red',
    marginBottom: 10
  }
});
