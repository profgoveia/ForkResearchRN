// app/detalhes.tsx
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function DetalhesScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Tela de Detalhes</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
