// app/_layout.tsx
import { Provider } from '@ant-design/react-native';
import pt_BR from '@ant-design/react-native/lib/locale-provider/pt_BR';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
  <Provider locale={pt_BR}>
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }}  />
      <Stack.Screen name="cadastro" options={{ title: 'Cadastro' }} />
      <Stack.Screen name="(home)" options={{ headerShown: false }} />
    </Stack>
  </Provider>

  );
}

