import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Index() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Index!!!</Text>
            <Button title="Sair" onPress={() => router.dismiss()} />
        </View>
    );
}