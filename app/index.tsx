// app/index.tsx
import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Tela Inicial</Text>
      <Button
        title="Ver Detalhes"
        onPress={() => router.push('/detalhes')}
      />
      <View style={{ marginTop: 20 }}>
        <Button
          title="Entrar na Home"
          onPress={() => router.navigate('/(home)')}
        />
      </View>
    </View>
  );
}
